// Deploy as a Web App executing as the owner. The recipient is fixed here.
const SETTINGS = Object.freeze({
  recipient: 'haffizol.suf@gmail.com',
  site: 'https://haffizol.github.io/haffizol-portfolio/',
  dailyLimit: 50,
  minuteLimit: 5
});

function doGet() {
  return json_({ok: true, service: 'Portfolio visit notifications'});
}

function doPost(e) {
  const raw = e && e.postData && e.postData.contents;
  if (!raw || raw.length > 1024) return json_({ok: false, reason: 'invalid_request'});
  let event;
  try { event = JSON.parse(raw); } catch (_) { return json_({ok: false, reason: 'invalid_json'}); }
  return json_(processVisit_(event));
}

function processVisit_(event) {
  if (!event || event.event !== 'portfolio_visit' || event.site !== SETTINGS.site ||
      typeof event.eventId !== 'string' || !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(event.eventId)) {
    return {ok: false, reason: 'invalid_event'};
  }
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(5000)) return {ok: false, reason: 'busy'};
  try {
    const props = PropertiesService.getScriptProperties();
    const now = Date.now();
    const day = Utilities.formatDate(new Date(now), 'Asia/Kuala_Lumpur', 'yyyy-MM-dd');
    let state;
    try { state = JSON.parse(props.getProperty('VISIT_STATE') || '{}'); } catch (_) { state = {}; }
    if (state.day !== day) state = {day: day, sent: 0, seen: {}, recent: []};
    state.seen = state.seen || {};
    if (state.seen[event.eventId]) return {ok: true, duplicate: true};
    state.recent = (state.recent || []).filter(t => now - t < 60000);
    if (state.sent >= SETTINGS.dailyLimit || state.recent.length >= SETTINGS.minuteLimit || MailApp.getRemainingDailyQuota() < 1) {
      return {ok: false, reason: 'notification_limit'};
    }
    // Reserve before sending to prevent a retry from creating duplicate emails.
    state.seen[event.eventId] = now;
    state.recent.push(now);
    state.sent += 1;
    props.setProperty('VISIT_STATE', JSON.stringify(state));
    try {
      MailApp.sendEmail({
        to: SETTINGS.recipient,
        subject: 'New visit to Muhammad Haffizol Portfolio',
        name: 'Portfolio Notifications',
        body: 'A browser session opened your engineering portfolio.\n\n' +
          'Time (Malaysia): ' + Utilities.formatDate(new Date(now), 'Asia/Kuala_Lumpur', 'd MMMM yyyy, HH:mm:ss') + '\n' +
          'Website: ' + SETTINGS.site + '\n\n' +
          'This does not identify the visitor. Reloads in the same tab/session are normally suppressed.\n' +
          'Notifications sent today: ' + state.sent + ' of ' + SETTINGS.dailyLimit + '.'
      });
    } catch (error) {
      delete state.seen[event.eventId];
      state.recent.pop();
      state.sent -= 1;
      props.setProperty('VISIT_STATE', JSON.stringify(state));
      console.error('Portfolio notification email failed.');
      return {ok: false, reason: 'mail_failed'};
    }
    return {ok: true, sent: true};
  } finally {
    lock.releaseLock();
  }
}

function sendTestEmail() {
  const event = {event: 'portfolio_visit', site: SETTINGS.site, eventId: Utilities.getUuid()};
  const result = processVisit_(event);
  console.log(JSON.stringify(result));
  if (!result.ok) throw new Error('Test email not sent: ' + result.reason);
}

function json_(result) {
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}
