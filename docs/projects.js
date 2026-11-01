// Project record supplied by Haffizol, supported by the linked source repositories.
// Progress percentages are not performance or accuracy measurements.
window.PORTFOLIO_PROJECTS = [
 {
  id:'cmms',title:'A connected maintenance department.',short:'Computerized Maintenance Management System',category:['software','ai'],label:'MAINTENANCE OPERATIONS',state:'Operational · improving',stage:'operational',role:'Independent developer',art:'maintenance',
  intro:'An integrated maintenance platform linking production requests, work orders, spare parts, preventive maintenance and management review.',
  problem:'Maintenance information was spread across manual records, Excel and WhatsApp. Production teams repeatedly asked for updates, while maintenance teams worked across disconnected information.',
  contribution:['Independently developed the platform, with AI coding assistance, around maintenance and production users’ actual workflows.','Built separate modules for work orders, spare parts, KPIs, monthly meeting reviews, preventive maintenance and reporting.','Added functional AI weekly management summaries, machine-risk insights and breakdown-prediction functionality.','Used feedback, training and Kaizen to refine the system after introduction.'],
  outcome:'Reported operational results include a 73% improvement in maintenance response time, 34% less downtime and a 98% work-order completion rate. Production users report easier requests, faster responses and fewer repeated follow-ups.',
  metrics:[['73%','Improvement in response time'],['34%','Reduction in downtime'],['98%','Work-order completion rate']],
  stack:['React','JavaScript','Node.js','SQL','REST APIs','Applied AI'],
  evidence:'Results are supplied by the project owner. The AI functions are operational; a validated breakdown-prediction accuracy figure has not been supplied. The platform continues to evolve through user feedback.',source:'Project owner account · CMMS project records'
 },
 {
  id:'smart-checksheet',title:'Machine signals, made useful on the floor.',short:'OEE Monitoring & Smart Checksheet',category:['iot','software'],label:'PRODUCTION MONITORING',state:'Operational · expanding',stage:'operational',role:'Project lead & principal developer, with intern',art:'checksheet',
  intro:'An internship monitoring project evolved into connected checksheets, OEE visibility and 4M/Henkaten workflows across Port Klang and Sendayan.',
  problem:'Manual machine-output and checksheet records delayed visibility and introduced counting errors. The programme connects machine information with the records operators need during a shift.',
  contribution:['Developed the original real-time monitoring implementation during my internship; contributed to the published manufacturing case study.','Expanded the programme after my permanent appointment, collaborating with an intern and owning most data flow, connectivity and frontend/backend development.','Connected machine monitoring with checksheets, downtime, rejects, shift records and 4M/Henkaten tracking.','Rolled out completed Sendayan Line 1 and Line 2 systems, alongside completed and continuing installations at Port Klang.'],
  outcome:'The original IoT implementation earned the IIDEX 2025 Gold Award and replaced an approximately one-week manual data-collection process with near-real-time visibility. The later multi-line programme continues to expand.',
  metrics:[['98%','Original machine-state detection accuracy'],['54.7%','Reduction in original product-count error'],['< 1 s','Original system latency'],['< 0.5%','Original packet loss']],
  stack:['Raspberry Pi','Python','MQTT','Node-RED','React','Node.js','InfluxDB','Grafana'],
  evidence:'Performance figures and the award belong to the original monitoring implementation. They are not an accuracy guarantee for every later line. The evolved application documents per-line data, tablet interfaces, reports and integration support.',
  link:'https://github.com/digitalsgisb/smartchecksheet',linkText:'Explore the application repository ↗',links:[{url:'https://doi.org/10.5109/7395631',label:'Read the published case study ↗'}],source:'Original research project · implementation repository · rollout records'
 },
 {
  id:'rfid',title:'Stock visibility, closer to the material.',short:'UHF RFID Stock & Roll Monitoring',category:['iot'],label:'INVENTORY & TRACEABILITY',state:'In development',stage:'development',role:'Project lead',art:'rfid',
  intro:'UHF RFID tags, readers and a Raspberry Pi edge layer for automated roll-stock, finished-goods and racking tracking.',
  problem:'Manual inventory counting and tracking create recurring work. This initiative is developing a tag-based approach to stock visibility, with Sendayan roll ordering as an initial use case.',
  contribution:['Lead development around UHF RFID tags and a reader, using Raspberry Pi as the edge-processing layer.','Design the material-identification approach for roll stock, finished goods and racking.'],
  outcome:'In development. Automated stock visibility and reduced manual counting are the intended benefits; completed rollout, read accuracy and labour savings are not yet established.',
  stack:['UHF RFID','RFID reader','Raspberry Pi','Edge integration'],evidence:'The project record identifies ongoing RFID Roll Monitoring development for Sendayan. No source repository or validated performance results are available yet.',source:'Project owner account · RFID project record'
 },
 {
  id:'production-ai',title:'Ask better questions of production data.',short:'AI Production Analytics',category:['ai','software'],label:'MANUFACTURING INTELLIGENCE',state:'In use · fine-tuning',stage:'operational',role:'Project owner & developer',art:'chat',
  intro:'A production-analysis assistant connecting a conversational interface with manufacturing data and a Langflow workflow.',
  problem:'High-volume production records take time to review. Users need a practical way to ask questions about output, downtime, rejects and line performance.',
  contribution:['Developed the application around a React/TypeScript interface, a Node.js gateway and PostgreSQL-backed records.','Connected the assistant to a Langflow analysis workflow.','The repository includes normalized production-data views, source-event lineage and read-only access patterns for AI analysis.','Implemented support for optional validated KPI cards, charts and anomaly summaries.'],
  outcome:'The assistant is already used and is undergoing fine-tuning. Optional visual analytics and data-platform components are documented in the repository; their presence does not imply every feature is enabled in the live workflow.',
  stack:['React','TypeScript','Node.js','Express','PostgreSQL','Langflow','Docker'],evidence:'Current operational status is confirmed by the project owner. The repository documents the application and data platform. No quantified answer-accuracy or time-saving figure is claimed.',
  link:'https://github.com/digitalsgisb/ai_production_analytic',linkText:'Explore the repository ↗',source:'Project owner account · application and data-platform documentation'
 },
 {
  id:'she',title:'From safety findings to verified action.',short:'SHE Digital',category:['software'],label:'SAFETY OPERATIONS',state:'Operational · improving',stage:'operational',role:'Independent developer',art:'safety',
  intro:'A departmental platform connecting Red Tag findings, safety patrols, environmental reporting and corrective-action follow-up.',
  problem:'Safety work involves more than recording an issue: the finding needs an owner, evidence, follow-up and verification. SHE Digital connects these activities in one workspace.',
  contribution:['Independently developed the platform with Codex assistance.','Delivered Red Tag monitoring, daily patrol checklists and environmental issue reporting, confirmed in operational use.','Built workflows for PIC assignments, before/after evidence, reporting, review and action verification.','The repository also documents safety dashboards, near-miss/Kaizen reporting and CMMS work-order integration.'],
  outcome:'The three core modules are complete and in use, with ongoing monitoring. Health and waste modules remain future work. The wider platform continues to evolve.',
  stack:['Python','SQLite','JavaScript','HTML/CSS','HTTP APIs','Docker','PWA'],evidence:'Core rollout is confirmed by the project owner and project records. Additional integration and dashboard features are documented in source; feature-level live coverage may vary.',
  link:'https://github.com/digitalsgisb/she',linkText:'Explore the repository ↗',source:'Project owner account · SHE repository · deployment records'
 },
 {
  id:'hr',title:'Less chasing, clearer HR information.',short:'HR Digital',category:['software'],label:'PEOPLE & WORKFLOWS',state:'In daily use',stage:'operational',role:'Independent developer',art:'people',
  intro:'Training and company-vehicle tracking built around repetitive HR tasks, with both core modules already used daily.',
  problem:'Paper training records and manual key-in made planning and tracking tedious. HR also needed a simpler record of company-vehicle usage.',
  contribution:['Independently developed the platform with Codex assistance.','Digitalised training records, planning, email reminders, statistics and training-adoption tracking.','Built QR-based company-vehicle usage and mileage tracking.','The repository documents employee records, training matrices, vehicle evidence and administration.'],
  outcome:'Training and vehicle modules are used daily and have eased the burden of manual tracking. The employee suggestion scheme remains planned and has not started.',
  stack:['React','TypeScript','Node.js','Express','PostgreSQL','Prisma','QR codes','Docker'],evidence:'Daily use and ownership are confirmed by the project owner. No measured hours-saved or adoption percentage is supplied.',
  link:'https://github.com/digitalsgisb/HR_Digital',linkText:'Explore the repository ↗',source:'Project owner account · HR Digital repository'
 },
 {
  id:'attendance',title:'A clearer view of the people on shift.',short:'Smart Attendance',category:['iot','ai','software'],label:'MANPOWER VISIBILITY',state:'Completed · monitoring',stage:'operational',role:'Independent developer',art:'people',
  intro:'A Raspberry Pi face-matching kiosk and central dashboard for attendance visibility and manpower management across two plants.',
  problem:'The older HR attendance workflow required manual scanner-data retrieval using a USB drive. Automatic extraction through that system required additional licences.',
  contribution:['Independently developed the attendance system.','Connected a Raspberry Pi camera/touchscreen kiosk to a central Python/SQLite service and React dashboard.','Integrated live workforce views, shift/team grouping and attendance review.','The repository includes durable queued scan delivery and read-only connections for production applications.'],
  outcome:'Port Klang is in operational use and the Sendayan installation is complete. The system improves access to attendance information; a quantified time or licence-cost saving has not been supplied.',
  stack:['Raspberry Pi','Camera kiosk','Face matching','Python','SQLite','React','Docker'],evidence:'The project owner confirmed independent development and Sendayan completion, superseding an older progress screenshot. No facial-recognition accuracy claim is made.',
  link:'https://github.com/digitalsgisb/facescanpk',linkText:'Explore the repository ↗',source:'Project owner account · device and dashboard repository'
 },
 {
  id:'iot-scale',title:'Put material weight into the data flow.',short:'IoT Scale',category:['iot'],label:'MATERIAL WEIGHING',state:'Completed',stage:'operational',role:'Internship project developer',art:'scale',
  intro:'Connected weighing-data visibility for Roll Making 2MTR and 4MTR, developed during my internship.',
  problem:'Users need accessible weight information and a clear relationship between material recipes, planned batches and current weighing progress.',
  contribution:['Developed the IoT weighing project during my internship.','The supplied Node-RED flow retrieves model recipes from Google Sheets and uses MQTT weight/status messages.','Built fibre-ratio, cumulative target-weight, planned-cycle and actual-versus-expected dashboard calculations.','Connected selected model and planning information with the 4MTR process.'],
  outcome:'Both 2MTR and 4MTR installations are recorded complete. The system makes weighing data accessible to users; the supplied flow documents the integration/dashboard layer.',
  stack:['Node-RED','JavaScript','MQTT','Google Sheets','HTTP/JSON','Browser dashboards'],evidence:'Supported by the owner’s account, completion records and a reviewed Node-RED export. No weighing-accuracy, waste-reduction or labour-saving percentage is claimed. The raw export is not embedded.',source:'Project owner account · Node-RED flow export · completion records'
 },
 {
  id:'overview',title:'Two plants, one production overview.',short:'IoT Production Overview',category:['iot','software'],label:'CENTRAL PRODUCTION VISIBILITY',state:'Completed · monitoring',stage:'operational',role:'Technical lead & maintainer · intern collaboration',art:'overview',
  intro:'A mobile, desktop and wallboard view of production lines across Port Klang and Sendayan.',
  problem:'Separate machine systems make it difficult to see production status across sites. Teams need a consolidated live view with clear line availability.',
  contribution:['Provided technical guidance to the intern developing Production Overview and maintained the system after handover.','Supported the connection from Node-RED line events to the API and live browser updates.','The application manages production-line status and excludes unavailable lines from aggregate performance figures.'],
  outcome:'Recorded complete and under monitoring. The current repository documents production visibility, live line management and configurable wallboards. Attendance and History pages in this application remain placeholders.',
  stack:['React','JavaScript','Node.js','Express','PostgreSQL','Socket.IO','Node-RED'],evidence:'Contribution follows the earlier resume’s distinction between intern development, technical supervision and maintenance. Current completion is supported by the project record.',
  link:'https://github.com/digitalsgisb/production-overview',linkText:'Explore the repository ↗',source:'Resume contribution record · repository · completion record'
 },
 {
  id:'inverter',title:'Make inverter temperatures visible—and actionable.',short:'Solar Inverter Temperature Monitoring',category:['iot'],label:'EQUIPMENT MONITORING',state:'Completed · monitoring',stage:'operational',role:'Digital transformation project lead',art:'thermal',
  intro:'Temperature monitoring with automatic alerts, introduced following an inverter failure that occurred without warning.',
  problem:'A previous unalerted inverter failure highlighted a need for temperature visibility and notifications when equipment needs attention.',
  contribution:['Contributed to the team’s inverter temperature-monitoring response.','The team delivered multiple inverter readings and automatic alerts, as confirmed in the project account.'],
  outcome:'Completed and under monitoring. Provides temperature visibility and automatic alerts. No claim is made about avoided failures, financial savings or automatic shutdown.',
  stack:['Industrial IoT','Temperature monitoring','Automatic alerts'],evidence:'The owner confirmed automatic alerts and the project record marks completion. Sensor specification, alert channel and thresholds have not been published.',source:'Project owner account · completion record'
 },
 {
  id:'logistics-ai',title:'From purchase orders to a reviewed workbook.',short:'Logistics Document Automation',category:['ai','automation','software'],label:'AI DOCUMENT WORKFLOWS',state:'In use · improving',stage:'operational',role:'Digital transformation project lead',art:'workflow',
  intro:'Local AI-assisted purchase-order extraction, validation and conversion to Kanban Excel workbooks, with review and print preparation.',
  problem:'Repeated manual key-in from purchase-order documents slowed logistics preparation. Orders also need to be grouped and checked before dispatch paperwork is prepared.',
  contribution:['Led the logistics document-automation initiative.','The application orchestrates local Ollama extraction through n8n and validates the results before creating Excel workbooks.','Added date-grouped drafts, duplicate handling, operator review and confirmation.','The repository also documents rack-tag cross-checking and print-packet preparation.'],
  outcome:'The project owner reports faster, easier processing and less manual key-in. Ongoing development continues; no quantified processing-time or extraction-accuracy claim is supplied.',
  stack:['n8n','Ollama','React','TypeScript','Node.js','Fastify','SQLite','ExcelJS'],evidence:'The repository documents an internal converter for Toyota purchase orders. This is supplier-side engineering work; no Toyota employment or endorsement is implied.',
  link:'https://github.com/digitalsgisb/logistic_PO_n8n',linkText:'Explore the repository ↗',source:'Project owner account · logistics application and n8n workflow'
 },
 {
  id:'invoice',title:'Print-ready invoices in seconds.',short:'Account Digital — Invoice Studio',category:['software','automation'],label:'DOCUMENT PREPARATION',state:'Completed tool · pilot',stage:'pilot',role:'Digital transformation project lead',art:'document',
  intro:'A browser-side tool that combines customer invoices with approved ERP headers and QR codes for printing.',
  problem:'Preparing a print-ready invoice manually took approximately 30 minutes, including the work needed to combine the appropriate document content.',
  contribution:['Delivered the invoice-preparation automation pilot for the Accounts department.','The application accepts a customer invoice and matching ERP PDF, transfers the approved header/QR and produces a combined print-ready document.','Used browser-side PDF processing as a practical pilot for the wider automation programme.'],
  outcome:'Reduced print-ready invoice preparation from approximately 30 minutes to 10 seconds. This result applies to document preparation, not the full invoicing or payment cycle.',
  metrics:[['30 min → 10 s','Print-ready preparation']],stack:['React','TypeScript','Vinext','pdf-lib','Browser-side PDF processing'],evidence:'The completed invoice feature is recorded as a pilot. The Accounts guideline chatbot is planned. The existing PDF tool itself is not presented as AI inference.',
  link:'https://github.com/digitalsgisb/sugi_account',linkText:'Explore the repository ↗',source:'Project owner timing account · Account Digital repository'
 },
 {
  id:'tnb',title:'Monthly bill emails, entered into Excel.',short:'TNB Bill Data Automation',category:['ai','automation'],label:'EMAIL-TO-EXCEL PILOT',state:'Pilot · refining',stage:'pilot',role:'Digital transformation project lead',art:'document',
  intro:'An AI pilot that retrieves monthly TNB bill emails, extracts billing information and populates Excel.',
  problem:'Reading and entering monthly electricity-bill information was a repetitive task performed manually from emailed bills.',
  contribution:['Developed the bill-data automation initiative as part of the wider AI pilot programme.','Connected email retrieval, AI reading and Excel data entry within the described workflow.'],
  outcome:'The project owner reports approximately five minutes reduced to 10 seconds for bill-data processing, with positive accuracy feedback. A numerical accuracy measure has not been supplied.',
  metrics:[['5 min → 10 s','Bill-data processing']],stack:['AI document reading','Email workflow','Excel automation'],evidence:'Based on the project owner’s workflow and timing account. The pilot does not automate payment or establish a reduction in electricity consumption.',source:'Project owner account · pilot project record'
 },
 {
  id:'vision-inspection',title:'Support the model, then take the next stage.',short:'AI Defect Detector LM',category:['ai'],label:'MACHINE VISION',state:'In development · handover',stage:'development',role:'Technical advisor → continuing development',art:'vision',
  intro:'An intern-developed AI vision system for LM defect detection, now being handed over for continued development.',
  problem:'Product-specific visual inspection needs suitable image evidence, model validation and an operating workflow before production deployment.',
  contribution:['Advised and provided technical guidance while the intern developed the initial system.','Am taking over the project to continue its development and progress the handover.'],
  outcome:'Ongoing development. The recorded 90% is project progress, not detection accuracy. Model validation and production commissioning remain to be established.',
  stack:['Computer vision','AI inspection','Technical mentoring','System handover'],evidence:'Ownership is deliberately separated: initial development by the intern, technical advice from me, and continuing development after handover. No detector accuracy or model-library claim is made.',source:'Project owner contribution account · development record'
 }
];

window.PORTFOLIO_PROJECTS.forEach(p => { p.context = "Sugihara Grand Industries · workplace project"; });
window.PORTFOLIO_PROJECTS.push(...[
  {
    "id": "uitm-wheelchair",
    "title": "Navigation for an autonomous wheelchair.",
    "short": "UiTM RoboPioneers — SLAM Wheelchair Robot",
    "category": [
      "academic",
      "robotics"
    ],
    "label": "UiTM / TEAM ROBOTICS PROJECT",
    "state": "Academic prototype",
    "stage": "academic",
    "role": "Team member · navigation",
    "art": "wheelchair-poster",
    "context": "Universiti Teknologi MARA · academic team project",
    "intro": "A team-built autonomous wheelchair prototype combining sensor integration, ROS navigation and LiDAR-based mapping. My assigned contribution was navigation.",
    "problem": "Wheelchair autonomy requires reliable environmental mapping, localization and motion planning, alongside compatible mechanical, electronic and human–robot interaction systems.",
    "contribution": [
      "Contributed to navigation within the UiTM RoboPioneers team; hardware and AI integration were assigned to other team members.",
      "Worked within the poster’s ROS-based navigation approach, which brings together LiDAR processing, SLAM mapping, odometry and path planning."
    ],
    "outcome": "The poster presents the wheelchair prototype, integrated hardware/software architecture and SLAM navigation development. Precise navigation and higher-level contextual sensing remain identified development goals.",
    "stack": [
      "ROS",
      "LiDAR",
      "SLAM",
      "Odometry",
      "Path planning",
      "Sensor integration"
    ],
    "evidence": "The supplied UiTM poster names Muhammad Haffizol Bin Suffian under Navigation. This is a team project; no navigation-accuracy result or completed autonomous deployment is claimed.",
    "link": "assets/posters/uitm-robopioneers-wheelchair.png",
    "linkText": "View the original project poster ↗",
    "source": "UiTM RoboPioneers poster supplied by the project contributor"
  },
  {
    "id": "uitm-piezoelectric",
    "title": "Finding the geometry that harvests more energy.",
    "short": "Piezoelectric Cantilever Energy Harvesting",
    "category": [
      "academic",
      "simulation"
    ],
    "label": "UiTM / MECHANICAL ENGINEERING RESEARCH",
    "state": "Simulation study",
    "stage": "academic",
    "role": "Research project contributor",
    "art": "piezo-poster",
    "context": "Universiti Teknologi MARA · academic research project",
    "intro": "An ANSYS finite element study of how piezoelectric layer length and thickness affect a cantilever’s vibration response and energy-harvesting voltage.",
    "problem": "Piezoelectric geometry changes structural stiffness, natural frequency and electrical response. The study compares configurations to identify a suitable energy-harvesting design under controlled simulation conditions.",
    "contribution": [
      "Modelled a stainless-steel cantilever with a piezoelectric layer, varying layer lengths of 20, 30, 40 and 50 mm and thicknesses of 0.5, 1, 2 and 3 mm.",
      "Used modal analysis to identify natural frequencies and harmonic response analysis to study voltage output.",
      "Compared configurations and assessed the effect of layer dimensions on stiffness, deformation and strain concentration."
    ],
    "outcome": "The highest simulated voltage was 2.33 V for a 30 mm layer length and 1 mm thickness at 9 Hz. This is an ANSYS simulation result, rather than a measured prototype output.",
    "metrics": [
      [
        "2.33 V",
        "Highest simulated voltage"
      ],
      [
        "30 mm / 1 mm",
        "Best-performing layer length / thickness"
      ],
      [
        "9 Hz",
        "Frequency at the reported optimum"
      ]
    ],
    "stack": [
      "ANSYS",
      "Finite element analysis",
      "Modal analysis",
      "Harmonic response",
      "Piezoelectric energy harvesting"
    ],
    "evidence": "The supplied poster names Muhammad Haffizol Bin Suffian and reports the geometry study and simulated result. The related conference paper is listed in the resume.",
    "link": "assets/posters/uitm-piezoelectric-cantilever.png",
    "linkText": "View the original research poster ↗",
    "source": "UiTM piezoelectric cantilever research poster supplied by the researcher"
  }
]);
