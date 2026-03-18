export type Locale = "en" | "de";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "spectra-locale";

export type TranslationSchema = {
  seo: { title: string; description: string };
  nav: { items: Array<{ label: string; href: string }>; toggleLabel: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    support: string;
    signals: Array<{ title: string; detail: string }>;
    trustLine: string;
    exploreCta: string;
    workflowCta: string;
    metrics: Array<{ label: string; numberValue: number; suffix: string; note: string }>;
  };
  partners: {
    eyebrow: string;
    title: string;
    spectraRole: string;
    spectraDescription: string;
    spectraLink: string;
    extensoRole: string;
    extensoDescription: string;
    extensoLink: string;
  };
  challenge: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; description: string }>;
    impactLabel: string;
    impactText: string;
  };
  bottleneck: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<{ step: string; title: string; description: string }>;
  };
  solution: {
    eyebrow: string;
    title: string;
    description: string;
    inputTitle: string;
    inputDescription: string;
    podTitle: string;
    podDescription: string;
    modules: string[];
    outputTitle: string;
    outputDescription: string;
    capabilitiesEyebrow: string;
    capabilities: Array<{ title: string; description: string }>;
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    stepLabel: string;
    steps: Array<{ title: string; description: string }>;
  };
  templates: {
    eyebrow: string;
    title: string;
    description: string;
    flow: {
      messy: string;
      lines: string[];
      engine: string;
      engineTitle: string;
      engineDescription: string;
      output: string;
      outputTitle: string;
      outputDescription: string;
    };
    workspace: {
      eyebrow: string;
      badge: string;
      statusColumn: string;
      templates: Array<{
        id: string;
        tab: string;
        title: string;
        subtitle: string;
        columns: string[];
        rows: string[][];
        statuses: string[];
      }>;
    };
  };
  roi: {
    eyebrow: string;
    title: string;
    description: string;
    objectLabel: string;
    avgTimeLabel: string;
    swissRateLabel: string;
    efficiencyLabel: string;
    fixedLabel: string;
    trackButton: string;
    outputEyebrow: string;
    totalHours: string;
    swissCost: string;
    savings: string;
    spectraCost: string;
    note: string;
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: Array<{ label: string; value: number; suffix: string; description: string }>;
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    tagline: string;
    capabilityLabel: string;
    capabilities: Array<{ title: string; description: string }>;
  };
  cta: { title: string; description: string; trust: string; primary: string; secondary: string };
  footer: { line: string; site: string; copyright: string };
};

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    seo: {
      title: "Spectra x eXtenso | Scaling Real Estate Data Operations for Swiss Property Portfolios",
      description: "Discover how Spectra helps eXtenso scale RIMO implementations with a dedicated multilingual data operations pod for Swiss real estate portfolios.",
    },
    nav: {
      items: [
        { label: "Challenge", href: "#challenge" },
        { label: "Solution", href: "#solution" },
        { label: "Workflow", href: "#workflow" },
        { label: "Templates", href: "#templates" },
        { label: "ROI", href: "#roi" },
        { label: "Impact", href: "#impact" },
        { label: "Contact", href: "#cta" },
      ],
      toggleLabel: "Language",
    },
    hero: {
      eyebrow: "Spectra x eXtenso AG",
      title: "Scaling Real Estate Data Operations for Swiss Property Portfolios",
      subtitle: "How Spectra helps eXtenso accelerate RIMO implementations through a dedicated real estate data operations pod.",
      support: "Structured onboarding, multilingual operational support, and AI-enabled templates for faster, cleaner ERP implementation workflows.",
      signals: [
        { title: "Faster Onboarding", detail: "Reduced setup friction before RIMO data entry and configuration." },
        { title: "System-Ready Data", detail: "Structured records aligned to RIMO onboarding workflows." },
        { title: "Cost-Efficient Delivery", detail: "Multilingual pod model with lower operational overhead." },
      ],
      trustLine: "Trusted across 500+ real estate objects in active RIMO onboarding workflows.",
      exploreCta: "Explore the Value Story",
      workflowCta: "See Workflow",
      metrics: [
        { label: "Portfolio Objects", numberValue: 500, suffix: "+", note: "Supported in structured onboarding workflows" },
        { label: "Average Entry Time", numberValue: 14, suffix: " min", note: "Per object (typically 10-14 minutes in operational delivery)" },
        { label: "Template Layer", numberValue: 5, suffix: "+", note: "AI-enabled master data templates in active use" },
      ],
    },
    partners: {
      eyebrow: "Partnership Context",
      title: "About the Partners",
      spectraRole: "Delivery Partner",
      spectraDescription: "Spectra is a digital operations and technology services provider supporting European PropTech and real estate companies with dedicated operational teams. Through multilingual specialists with backgrounds in accounting, digitalization, and ERP data management, Spectra supports structured onboarding and operational delivery for real estate platforms.",
      spectraLink: "Talk to Spectra",
      extensoRole: "Implementation Partner",
      extensoDescription: "eXtenso AG is a Swiss digitalization and implementation partner specializing in ERP solutions for the real estate sector. The company supports property management firms in Switzerland with the implementation and onboarding of platforms such as RIMO, helping clients structure and manage real estate portfolios in modern digital environments.",
      extensoLink: "Explore the Workflow",
    },
    challenge: {
      eyebrow: "Challenge",
      title: "The Hidden Bottleneck in Real Estate ERP Implementations",
      description: "Swiss property management companies migrating to digital ERP systems such as RIMO often face the same issue: fragmented, inconsistent, and non-standardized legacy portfolio data.",
      cards: [
        { title: "Fragmented Source Files", description: "Property and tenant data is spread across disconnected Excel and CSV exports." },
        { title: "Inconsistent Naming", description: "Naming standards differ by object and unit, making portfolio normalization slow." },
        { title: "Missing Required Metadata", description: "Critical onboarding fields for ERP setup are frequently incomplete or absent." },
        { title: "Tenant-Unit Mismatches", description: "Tenant records and unit references are often misaligned across source files." },
        { title: "Non-Standard Portfolio Structures", description: "Data models vary between portfolios and require manual restructuring." },
        { title: "High Manual Setup Effort", description: "Implementation teams lose execution time to repetitive data preparation tasks." },
      ],
      impactLabel: "Key Impact Insight",
      impactText: "Up to 60% of ERP implementation time is spent cleaning and restructuring portfolio data.",
    },
    bottleneck: {
      eyebrow: "Implementation Drag",
      title: "Why Implementations Slow Down",
      description: "Implementation partners like eXtenso often spend significant operational effort cleaning, validating, and restructuring data before it can be entered into the ERP environment.",
      steps: [
        { step: "Step 01", title: "Legacy Client Data", description: "Source data arrives in mixed file formats with uneven structure across portfolios." },
        { step: "Step 02", title: "Fragmented Datasets", description: "Key property and tenant fields are spread across disconnected exports and sheets." },
        { step: "Step 03", title: "Manual Restructuring", description: "Implementation teams spend delivery time remapping and cleaning records before entry." },
        { step: "Step 04", title: "Delayed Onboarding", description: "Go-live momentum slows because ERP onboarding starts after heavy pre-processing work." },
      ],
    },
    solution: {
      eyebrow: "Operating Model",
      title: "A Dedicated Real Estate Data Operations Pod",
      description: "Spectra provides a multilingual operational pod that works alongside eXtenso to prepare, structure, and enter data into RIMO with speed and precision.",
      inputTitle: "Client Portfolio Data",
      inputDescription: "Incoming files, master records, and source exports from client portfolios.",
      podTitle: "Spectra Data Pod",
      podDescription: "Structured execution layer for preparation, setup, and validation.",
      modules: ["Data Operations Specialists", "RIMO Operators", "QA & Validation", "AI Template Layer"],
      outputTitle: "RIMO Platform",
      outputDescription: "System-ready object, tenant, and contract data entered for implementation workflows.",
      capabilitiesEyebrow: "Core capabilities in flow",
      capabilities: [
        { title: "Data Preparation", description: "Data is cleaned, normalized, and validated before RIMO entry." },
        { title: "RIMO Object Setup", description: "Property objects are configured with consistent master structures." },
        { title: "Tenant & Contract Entry", description: "Tenant records and contract relationships are entered with precision." },
        { title: "Account Hierarchy Support", description: "Financial account mappings align with portfolio-specific logic." },
        { title: "Data Verification", description: "Final quality checks reduce onboarding friction during go-live." },
      ],
    },
    workflow: {
      eyebrow: "Execution Workflow",
      title: "How the Delivery Model Works",
      description: "A repeatable six-step operational workflow keeps implementation quality high while accelerating onboarding throughput.",
      stepLabel: "Step",
      steps: [
        { title: "Portfolio Data Collection", description: "Secure intake of portfolio files and implementation context." },
        { title: "Structuring & Validation", description: "Source fields are normalized and validated for data quality." },
        { title: "Master Data Preparation", description: "Template-driven master records are prepared for reliable mapping." },
        { title: "RIMO Data Entry", description: "Structured records are entered into the RIMO platform workflow." },
        { title: "Quality Assurance", description: "Cross-checks ensure consistency, completeness, and onboarding readiness." },
        { title: "Client Handover", description: "Verified data is handed over for final implementation and go-live steps." },
      ],
    },
    templates: {
      eyebrow: "Template Layer",
      title: "AI-Enabled Master Data Templates",
      description: "Spectra helped design structured templates that standardize real estate portfolio onboarding and improve data consistency before system entry.",
      flow: {
        messy: "Messy spreadsheets",
        lines: ["Obj_11 | Addr. missing | - | n/a", "TEN#7 | Muller | 12/02 | Unit-?", "Rent Contract X | ??? | CHF | TBD"],
        engine: "AI structuring engine",
        engineTitle: "Parsing, mapping, and validation logic",
        engineDescription: "Normalizes fields, resolves gaps, and aligns schema for RIMO-ready onboarding templates.",
        output: "Standardized master templates",
        outputTitle: "System-ready structure",
        outputDescription: "Consistent columns, validated values, implementation-ready records.",
      },
      workspace: {
        eyebrow: "Master Template Workspace",
        badge: "AI-assisted validation",
        statusColumn: "Status",
        templates: [
          { id: "property", tab: "Property Objects", title: "Property Object Master Template", subtitle: "Standardized object records for clean portfolio onboarding in RIMO.", columns: ["Property ID", "Address", "Units", "Owner"], rows: [["CH-ZH-1104", "Bahnhofstrasse 21, Zurich", "18", "Pensionskasse Nord"], ["CH-BE-2409", "Marktgasse 8, Bern", "12", "Helvetia Asset Mgmt"], ["CH-BS-3152", "Rheingasse 4, Basel", "26", "Rhein Portfolio AG"]], statuses: ["Validated", "Validated", "Mapped"] },
          { id: "tenant", tab: "Tenant Information", title: "Tenant Information Master Template", subtitle: "Tenant-level records aligned for multilingual onboarding workflows.", columns: ["Tenant ID", "Name", "Lease Start", "Unit"], rows: [["TEN-774", "Muller Consulting GmbH", "2024-02-01", "ZH-1104-12"], ["TEN-882", "AlpenCare AG", "2023-10-15", "BE-2409-04"], ["TEN-917", "Nova Retail SA", "2025-01-01", "BS-3152-07"]], statuses: ["Validated", "Validated", "Reviewed"] },
          { id: "rental", tab: "Rental Contracts", title: "Rental Contract Master Template", subtitle: "Contract records standardized for date logic, terms, and billing consistency.", columns: ["Contract ID", "Type", "Start Date", "Rent"], rows: [["CTR-1023", "Commercial", "2024-02-01", "CHF 5,800"], ["CTR-1189", "Residential", "2023-10-15", "CHF 2,150"], ["CTR-1212", "Commercial", "2025-01-01", "CHF 7,200"]], statuses: ["Validated", "Validated", "Mapped"] },
          { id: "units", tab: "Unit Structures", title: "Unit Structure Master Template", subtitle: "Building and unit hierarchy prepared for reliable system mapping.", columns: ["Unit ID", "Building", "Floor", "Area m2"], rows: [["ZH-1104-12", "Bahnhof 21", "3", "148"], ["BE-2409-04", "Marktgasse 8", "1", "92"], ["BS-3152-07", "Rheingasse 4", "2", "176"]], statuses: ["Validated", "Validated", "Validated"] },
          { id: "finance", tab: "Financial Account Mappings", title: "Financial Mapping Master Template", subtitle: "Chart-of-accounts mapping structured for portfolio-specific reporting logic.", columns: ["Account Code", "Category", "Cost Center", "Portfolio"], rows: [["4001", "Rental Revenue", "CC-ZH-01", "Zurich Core"], ["6210", "Facility Costs", "CC-BE-03", "Bern Managed"], ["7012", "Admin Expenses", "CC-BS-02", "Basel Mixed"]], statuses: ["Mapped", "Validated", "Reviewed"] },
        ],
      },
    },
    roi: {
      eyebrow: "ROI Snapshot",
      title: "Estimate Operational Efficiency Gains",
      description: "Use this lightweight model to estimate hours, Switzerland-equivalent delivery cost, and projected savings with a Spectra pod-based operating model.",
      objectLabel: "Number of objects",
      avgTimeLabel: "Average manual time per object",
      swissRateLabel: "Swiss hourly rate",
      efficiencyLabel: "Efficiency gain through Spectra delivery partnership",
      fixedLabel: "Fixed",
      trackButton: "Track ROI Scenario",
      outputEyebrow: "Estimated output",
      totalHours: "Estimated total manual hours",
      swissCost: "Estimated Swiss-equivalent delivery cost",
      savings: "Estimated savings with Spectra",
      spectraCost: "Estimated Spectra delivery cost",
      note: "Based on fixed assumptions: 14 min per object, CHF 80 Swiss hourly rate, and a 40% efficiency gain through Spectra delivery partnership.",
    },
    impact: {
      eyebrow: "Measured Impact",
      title: "Operational outcomes backed by delivery data",
      description: "The collaboration between Spectra and eXtenso demonstrates repeatable throughput, improved consistency, and meaningful cost efficiency at implementation scale.",
      metrics: [
        { label: "Objects Onboarded", value: 500, suffix: "+", description: "Real estate objects structured and prepared for RIMO onboarding workflows." },
        { label: "Data Entry Time", value: 14, suffix: " min", description: "Average entry cycle per object ranges from 10 to 14 minutes." },
        { label: "AI Templates", value: 5, suffix: "+", description: "AI-enabled master data templates designed for consistency and speed." },
        { label: "Cost Reduction", value: 40, suffix: "%", description: "Compared to equivalent Switzerland-based operational delivery models." },
      ],
    },
    team: {
      eyebrow: "Delivery Team",
      title: "The Delivery Team",
      description: "A bilingual operations team with accounting, finance, and digitalization backgrounds supports eXtenso with execution-ready portfolio onboarding.",
      tagline: "Multilingual. Process-driven. Implementation-ready.",
      capabilityLabel: "Capability",
      capabilities: [
        { title: "German-Speaking Operations Specialists", description: "Execution teams communicate clearly with Swiss real estate stakeholders while maintaining cross-functional alignment across client and implementation layers." },
        { title: "Finance & Accounting Backgrounds", description: "Strong handling of account structures, financial context, and data rigor." },
        { title: "Digitalization Delivery Experience", description: "Practical exposure to Swiss real estate onboarding and system migration workflows." },
      ],
    },
    cta: {
      title: "Launch Your Real Estate Data Operations Pod",
      description: "Spectra builds dedicated multilingual operational teams that support ERP implementations and portfolio onboarding projects.",
      trust: "Supporting Swiss PropTech implementations.",
      primary: "Book a Call",
      secondary: "Explore the Workflow",
    },
    footer: { line: "The operational backbone behind scalable real estate data onboarding.", site: "www.spectra.support", copyright: "All rights reserved." },
  },
  de: {
    seo: {
      title: "Spectra x eXtenso | Skalierbare Immobilien-Datenoperationen für Schweizer Portfolios",
      description: "Erfahren Sie, wie Spectra eXtenso bei der Skalierung von RIMO-Implementierungen mit einem dedizierten mehrsprachigen Datenoperations-Team unterstützt.",
    },
    nav: {
      items: [
        { label: "Herausforderung", href: "#challenge" },
        { label: "Lösung", href: "#solution" },
        { label: "Ablauf", href: "#workflow" },
        { label: "Templates", href: "#templates" },
        { label: "ROI", href: "#roi" },
        { label: "Wirkung", href: "#impact" },
        { label: "Kontakt", href: "#cta" },
      ],
      toggleLabel: "Sprache",
    },
    hero: {
      eyebrow: "Spectra x eXtenso AG",
      title: "Skalierbare Immobilien-Datenoperationen für Schweizer Portfolios",
      subtitle: "Wie Spectra eXtenso dabei unterstützt, RIMO-Implementierungen durch ein dediziertes operatives Daten-Team für Immobilien effizient zu skalieren.",
      support: "Strukturierte Onboarding-Prozesse, mehrsprachige operative Unterstützung und KI-gestützte Templates für schnellere und sauberere ERP-Implementierungsabläufe.",
      signals: [
        { title: "Schnelleres Onboarding", detail: "Weniger Setup-Reibung vor Datenerfassung und Konfiguration in RIMO." },
        { title: "Systembereite Daten", detail: "Strukturierte Datensätze, ausgerichtet auf RIMO-Onboarding-Workflows." },
        { title: "Kosteneffizientes Delivery", detail: "Mehrsprachiges Pod-Modell mit geringerem operativem Overhead." },
      ],
      trustLine: "Bewährt bei 500+ Immobilienobjekten in aktiven RIMO-Onboarding-Projekten.",
      exploreCta: "Value Story ansehen",
      workflowCta: "Ablauf ansehen",
      metrics: [
        { label: "Immobilienobjekte", numberValue: 500, suffix: "+", note: "Unterstützt in strukturierten Onboarding-Workflows" },
        { label: "Ø Erfassungszeit", numberValue: 14, suffix: " Min", note: "Pro Objekt (typisch 10-14 Minuten im operativen Delivery)" },
        { label: "Template-Layer", numberValue: 5, suffix: "+", note: "KI-gestützte Stammdaten-Templates im aktiven Einsatz" },
      ],
    },
    partners: {
      eyebrow: "Partnerkontext",
      title: "Über die Partner",
      spectraRole: "Delivery-Partner",
      spectraDescription: "Spectra ist ein Anbieter für digitale Operations- und Technologiedienstleistungen und unterstützt europäische PropTech- und Immobilienunternehmen mit dedizierten operativen Teams. Mit mehrsprachigen Spezialisten aus den Bereichen Accounting, Digitalisierung und ERP-Datenmanagement unterstützt Spectra strukturiertes Onboarding und operative Umsetzung für Immobilienplattformen.",
      spectraLink: "Mit Spectra sprechen",
      extensoRole: "Implementierungspartner",
      extensoDescription: "eXtenso AG ist ein Schweizer Digitalisierungs- und Implementierungspartner mit Fokus auf ERP-Lösungen für die Immobilienbranche. Das Unternehmen unterstützt Immobilienverwaltungen in der Schweiz bei der Einführung und dem Onboarding von Plattformen wie RIMO, damit Portfolios in modernen digitalen Umgebungen strukturiert verwaltet werden können.",
      extensoLink: "Ablauf ansehen",
    },
    challenge: {
      eyebrow: "Herausforderung",
      title: "Der versteckte Engpass bei Immobilien-ERP-Implementierungen",
      description: "Schweizer Immobilienverwaltungen, die auf digitale ERP-Systeme wie RIMO migrieren, stehen häufig vor derselben Herausforderung: fragmentierte, inkonsistente und nicht standardisierte Bestandsdaten.",
      cards: [
        { title: "Fragmentierte Excel- oder CSV-Datensätze", description: "Objekt- und Mieterdaten sind über mehrere Exporte verteilt." },
        { title: "Uneinheitliche Benennungskonventionen", description: "Benennungsstandards variieren je Objekt und Einheit." },
        { title: "Fehlende Metadaten", description: "Relevante Felder für den ERP-Setup sind oft unvollständig." },
        { title: "Unstimmigkeiten zwischen Mietern und Einheiten", description: "Mieter- und Einheitenzuordnungen sind häufig inkonsistent." },
        { title: "Nicht standardisierte Portfoliostrukturen", description: "Portfoliomodelle unterscheiden sich und erfordern manuelle Anpassungen." },
        { title: "Hoher manueller Einrichtungsaufwand", description: "Teams verlieren operative Zeit durch wiederkehrende Datenaufbereitung." },
      ],
      impactLabel: "Wirkungsfaktor",
      impactText: "Bis zu 60 % der ERP-Implementierungszeit entfallen auf die Bereinigung und Strukturierung von Portfoliodaten.",
    },
    bottleneck: {
      eyebrow: "Implementierungsbremse",
      title: "Warum Implementierungen langsamer werden",
      description: "Implementierungspartner wie eXtenso investieren oft erheblichen operativen Aufwand in die Bereinigung, Validierung und Strukturierung von Daten, bevor diese in die ERP-Umgebung übernommen werden können.",
      steps: [
        { step: "Schritt 01", title: "Historische Kundendaten", description: "Ausgangsdaten liegen in gemischten Dateiformaten mit uneinheitlicher Struktur vor." },
        { step: "Schritt 02", title: "Fragmentierte Datensätze", description: "Wichtige Objekt- und Mieterfelder sind über mehrere Exporte und Tabellen verteilt." },
        { step: "Schritt 03", title: "Manuelle Aufbereitung", description: "Teams investieren Delivery-Zeit in Mapping und Bereinigung vor der Erfassung." },
        { step: "Schritt 04", title: "Verzögertes Onboarding", description: "Go-live-Momentum sinkt, weil ERP-Onboarding erst nach aufwändiger Vorarbeit startet." },
      ],
    },
    solution: {
      eyebrow: "Operating Model",
      title: "Ein dediziertes operatives Daten-Team für Immobilien",
      description: "Spectra stellt ein mehrsprachiges operatives Team bereit, das eng mit eXtenso zusammenarbeitet, um Portfoliodaten für RIMO strukturiert, präzise und effizient vorzubereiten und einzupflegen.",
      inputTitle: "Portfoliodaten des Kunden",
      inputDescription: "Eingehende Dateien, Stammdaten und Quellexporte aus Kundenportfolios.",
      podTitle: "Spectra Data Pod",
      podDescription: "Strukturierte Ausführungsebene für Vorbereitung, Setup und Validierung.",
      modules: ["Datenoperations-Spezialisten", "RIMO-Operatoren", "QA & Validierung", "KI-Template-Layer"],
      outputTitle: "RIMO-Plattform",
      outputDescription: "Systembereite Objekt-, Mieter- und Vertragsdaten für Implementierungsabläufe.",
      capabilitiesEyebrow: "Kernfähigkeiten im Fluss",
      capabilities: [
        { title: "Datenaufbereitung", description: "Daten werden vor der Erfassung in RIMO bereinigt, normalisiert und validiert." },
        { title: "Einrichtung von RIMO-Objekten", description: "Objekte werden mit konsistenten Stammdatenstrukturen konfiguriert." },
        { title: "Erfassung von Mietern und Verträgen", description: "Mieter- und Vertragsdaten werden präzise eingepflegt." },
        { title: "Unterstützung bei Kontenhierarchien", description: "Finanzielle Kontenzuordnungen folgen der jeweiligen Portfoliologik." },
        { title: "Datenprüfung", description: "Finale Qualitätsprüfungen reduzieren Reibung vor dem Go-live." },
      ],
    },
    workflow: {
      eyebrow: "Ablauf",
      title: "So funktioniert das Delivery-Modell",
      description: "Ein wiederholbarer sechsstufiger Prozess hält die Implementierungsqualität hoch und steigert den Onboarding-Durchsatz.",
      stepLabel: "Schritt",
      steps: [
        { title: "Sammlung der Portfoliodaten", description: "Sichere Übernahme von Portfolio-Dateien und Kontextinformationen." },
        { title: "Datenstrukturierung und Validierung", description: "Quelldaten werden normalisiert und auf Qualität geprüft." },
        { title: "Vorbereitung der Stammdaten", description: "Template-gestützte Stammdaten werden für verlässliches Mapping vorbereitet." },
        { title: "Erstellung der RIMO-Objekte", description: "Strukturierte Datensätze werden in den RIMO-Workflow eingepflegt." },
        { title: "Anlage von Mietern und Verträgen", description: "Beziehungen und Vertragsdaten werden konsistent aufgebaut." },
        { title: "Abschließende Systemprüfung", description: "Verifizierte Daten werden für Implementierung und Go-live übergeben." },
      ],
    },
    templates: {
      eyebrow: "Template-Ebene",
      title: "KI-gestützte Stammdaten-Templates",
      description: "Spectra hat bei der Entwicklung strukturierter Templates unterstützt, die das Onboarding von Immobilienportfolios standardisieren und die Datenkonsistenz vor der Systemerfassung verbessern.",
      flow: {
        messy: "Unstrukturierte Tabellen",
        lines: ["Obj_11 | Adresse fehlt | - | n/a", "TEN#7 | Müller | 12/02 | Einheit-?", "Mietvertrag X | ??? | CHF | TBD"],
        engine: "KI-Strukturierungs-Engine",
        engineTitle: "Parsing-, Mapping- und Validierungslogik",
        engineDescription: "Normalisiert Felder, schließt Lücken und richtet Schemata auf RIMO-geeignete Onboarding-Templates aus.",
        output: "Standardisierte Master-Templates",
        outputTitle: "Systembereite Struktur",
        outputDescription: "Konsistente Spalten, validierte Werte und implementierungsreife Datensätze.",
      },
      workspace: {
        eyebrow: "Master-Template-Workspace",
        badge: "KI-gestützte Validierung",
        statusColumn: "Status",
        templates: [
          { id: "property", tab: "Immobilienobjekte", title: "Master-Template Immobilienobjekte", subtitle: "Standardisierte Objektdatensätze für sauberes Portfolio-Onboarding in RIMO.", columns: ["Objekt-ID", "Adresse", "Einheiten", "Eigentümer"], rows: [["CH-ZH-1104", "Bahnhofstrasse 21, Zürich", "18", "Pensionskasse Nord"], ["CH-BE-2409", "Marktgasse 8, Bern", "12", "Helvetia Asset Mgmt"], ["CH-BS-3152", "Rheingasse 4, Basel", "26", "Rhein Portfolio AG"]], statuses: ["Validiert", "Validiert", "Gemappt"] },
          { id: "tenant", tab: "Mieterinformationen", title: "Master-Template Mieterinformationen", subtitle: "Mieterbezogene Datensätze für mehrsprachige Onboarding-Workflows.", columns: ["Mieter-ID", "Name", "Mietbeginn", "Einheit"], rows: [["TEN-774", "Müller Consulting GmbH", "2024-02-01", "ZH-1104-12"], ["TEN-882", "AlpenCare AG", "2023-10-15", "BE-2409-04"], ["TEN-917", "Nova Retail SA", "2025-01-01", "BS-3152-07"]], statuses: ["Validiert", "Validiert", "Geprüft"] },
          { id: "rental", tab: "Mietverträge", title: "Master-Template Mietverträge", subtitle: "Vertragsdatensätze standardisiert für Laufzeiten, Konditionen und Abrechnung.", columns: ["Vertrags-ID", "Typ", "Startdatum", "Miete"], rows: [["CTR-1023", "Gewerbe", "2024-02-01", "CHF 5,800"], ["CTR-1189", "Wohnen", "2023-10-15", "CHF 2,150"], ["CTR-1212", "Gewerbe", "2025-01-01", "CHF 7,200"]], statuses: ["Validiert", "Validiert", "Gemappt"] },
          { id: "units", tab: "Einheitenstrukturen", title: "Master-Template Einheitenstrukturen", subtitle: "Gebäude- und Einheitenhierarchien für zuverlässiges System-Mapping.", columns: ["Einheiten-ID", "Gebäude", "Etage", "Fläche m2"], rows: [["ZH-1104-12", "Bahnhof 21", "3", "148"], ["BE-2409-04", "Marktgasse 8", "1", "92"], ["BS-3152-07", "Rheingasse 4", "2", "176"]], statuses: ["Validiert", "Validiert", "Validiert"] },
          { id: "finance", tab: "Finanzielle Kontenzuordnungen", title: "Master-Template Finanzmapping", subtitle: "Kontenrahmen-Mapping für portfoliospezifische Reporting-Logik.", columns: ["Kontocode", "Kategorie", "Kostenstelle", "Portfolio"], rows: [["4001", "Mietertrag", "CC-ZH-01", "Zurich Core"], ["6210", "Facility-Kosten", "CC-BE-03", "Bern Managed"], ["7012", "Admin-Kosten", "CC-BS-02", "Basel Mixed"]], statuses: ["Gemappt", "Validiert", "Geprüft"] },
        ],
      },
    },
    roi: {
      eyebrow: "ROI-Snapshot",
      title: "Operative Effizienzgewinne berechnen",
      description: "Dieses kompakte Modell schätzt Stunden, lokale Vergleichskosten und erwartete Einsparungen mit einem pod-basierten Spectra-Operating-Modell.",
      objectLabel: "Anzahl der Objekte",
      avgTimeLabel: "Durchschnittlicher manueller Aufwand pro Objekt",
      swissRateLabel: "Schweizer Stundensatz",
      efficiencyLabel: "Effizienzgewinn durch die Spectra-Delivery-Partnerschaft",
      fixedLabel: "Fix",
      trackButton: "ROI-Szenario erfassen",
      outputEyebrow: "Geschätzte Ergebnisse",
      totalHours: "Geschätzte gesamte manuelle Stunden",
      swissCost: "Geschätzte lokale Delivery-Kosten",
      savings: "Geschätzte Einsparungen mit Spectra",
      spectraCost: "Geschätzte Spectra-Delivery-Kosten",
      note: "Basierend auf fixen Annahmen: 14 Min pro Objekt, CHF 80 Schweizer Stundensatz und 40 % Effizienzgewinn durch die Spectra-Delivery-Partnerschaft.",
    },
    impact: {
      eyebrow: "Messbare Wirkung",
      title: "Operative Ergebnisse auf Basis realer Delivery-Daten",
      description: "Die Zusammenarbeit von Spectra und eXtenso zeigt wiederholbaren Durchsatz, höhere Datenkonsistenz und deutliche Kosteneffizienz im Implementierungsmaßstab.",
      metrics: [
        { label: "Onboardete Objekte", value: 500, suffix: "+", description: "Immobilienobjekte wurden für RIMO-Onboarding strukturiert und vorbereitet." },
        { label: "Erfassungszeit", value: 14, suffix: " Min", description: "Die durchschnittliche Erfassungszeit pro Objekt liegt bei 10 bis 14 Minuten." },
        { label: "KI-Templates", value: 5, suffix: "+", description: "KI-gestützte Stammdaten-Templates für Konsistenz und Geschwindigkeit." },
        { label: "Kostenreduktion", value: 40, suffix: "%", description: "Gegenüber einer operativen Leistungserbringung in der Schweiz." },
      ],
    },
    team: {
      eyebrow: "Delivery-Team",
      title: "Das Delivery-Team",
      description: "Ein zweisprachiges Operations-Team mit fachlichen Hintergründen in Accounting, Finance und Digitalisierung unterstützt eXtenso mit umsetzungsreifem Portfolio-Onboarding.",
      tagline: "Mehrsprachig. Prozessorientiert. Implementierungsstark.",
      capabilityLabel: "Kompetenz",
      capabilities: [
        { title: "Deutschsprachige Operations-Spezialisten", description: "Execution-Teams kommunizieren klar mit Schweizer Stakeholdern und halten die Abstimmung zwischen Kunden- und Implementierungsebene aufrecht." },
        { title: "Fachhintergründe in Accounting & Finance", description: "Sicherer Umgang mit Kontenstrukturen, finanziellem Kontext und hoher Datengenauigkeit." },
        { title: "Erfahrung in der digitalen Umsetzung", description: "Praktische Erfahrung mit Schweizer Onboarding- und Systemmigrationsprozessen im Immobilienumfeld." },
      ],
    },
    cta: {
      title: "Skalieren Sie Ihre nächste Portfolio-Implementierung",
      description: "Bringen Sie Struktur, Geschwindigkeit und operative Kapazität in das ERP-Onboarding von Immobilienportfolios.",
      trust: "Unterstützung für Schweizer PropTech-Implementierungen.",
      primary: "Gespräch buchen",
      secondary: "Ablauf ansehen",
    },
    footer: { line: "Das operative Rückgrat hinter skalierbarem Immobilien-Daten-Onboarding.", site: "www.spectra.support", copyright: "Alle Rechte vorbehalten." },
  },
};






