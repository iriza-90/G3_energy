/** Site copy sourced from G3 Company Profile v3 (Corporate Profile 2026). */

export const SITE = {
  name: "G3 Energy International",
  legalName: "G3 Energy International Ltd",
  shortName: "G3",
  tagline: "Global · Green · Growth",
  sector: "Independent Power Producer",
  profileYear: "2026",
  description:
    "G3 Energy International Ltd is a renewable energy company registered in Rwanda and headquartered in Kigali. We develop, engineer, finance and operate utility-scale solar photovoltaic power plants for connection to the national grid under long-term Power Purchase Agreements.",
  vision:
    "A trusted African independent power producer, delivering clean energy that powers economic transformation across the continent.",
  mission:
    "To develop bankable utility-scale solar projects that deliver competitive power to national utilities and lasting benefit to host communities.",
  email: "info@g3energy.com",
  partnershipsEmail: "partnerships@g3energy.com",
  website: "www.g3energy.com",
  location: "Kigali, Rwanda",
  registered: "Registered in Rwanda — Rwanda Development Board (RDB), Kigali",
  strategicPartner:
    "Guangdong Jincheng Guangyi Electric Power Technology Co., Ltd (今程光一)",
  strategicPartnerShort: "Guangdong Jincheng Guangyi",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#track-record", label: "Track Record" },
  { href: "#flagship", label: "Flagship" },
  { href: "#markets", label: "Markets" },
] as const;

export const TICKER_ITEMS = [
  "Independent Power Producer",
  "Utility-Scale Solar PV",
  "5 MW Cyprus PV Park Delivered",
  "40 MWp Wuzhou Track Record",
  "100–150 MW Rwanda Flagship",
  "DFI-Aligned Governance",
  "Solar + BESS Solutions",
  "Global · Green · Growth",
] as const;

export const HERO_STATS = [
  { value: "5 MW", label: "Cyprus PV Delivered", count: 5, suffix: " MW" },
  { value: "40 MWp", label: "Wuzhou Project", count: 40, suffix: " MWp" },
  { value: "100–150", label: "MW Rwanda Flagship" },
  { value: "25yr", label: "PPA & O&M Horizon" },
] as const;

export const ABOUT_FEATURES = [
  {
    title: "DFI-Aligned Governance",
    description:
      "Projects designed to World Bank Group, AfDB and commercial lender criteria — bankable structures from day one.",
    icon: "shield" as const,
  },
  {
    title: "Solar PV + Storage Where Needed",
    description:
      "Utility-scale solar PV with battery storage where the grid requires it; full REMA and international environmental compliance.",
    icon: "solar" as const,
  },
  {
    title: "Local Impact Built In",
    description:
      "Local employment, structured skills transfer, and fair community engagement on every project.",
    icon: "star" as const,
  },
] as const;

export const ABOUT_BODY = {
  intro:
    "The company is structured as a Sino-African venture: Rwandan-led, strengthened by the certified engineering, construction and financing capability of Guangdong Jincheng Guangyi Electric Power Technology Co., Ltd — an established Chinese power-sector enterprise serving subsidiaries and contractors of China Southern Power Grid.",
  facts: [
    { label: "Legal Name", value: "G3 Energy International Ltd" },
    { label: "Registration", value: "Rwanda Development Board (RDB), Kigali" },
    { label: "Headquarters", value: "Kigali, Rwanda" },
    {
      label: "Sector",
      value: "IPP — utility-scale solar PV development, EPC delivery, project finance, O&M",
    },
  ],
} as const;

export const PILLARS = [
  { letter: "G", title: "Global", subtitle: "Continental reach" },
  { letter: "G", title: "Green", subtitle: "100% renewable" },
  { letter: "G", title: "Growth", subtitle: "Economic impact" },
] as const;

export const SERVICES = [
  {
    num: "01",
    cat: "Development",
    title: "Solar IPP Development",
    description:
      "Utility-scale solar PV for national-grid connection under long-term PPAs. Site identification, feasibility, land assembly, PPA negotiation, generation licensing and grid-connection — greenfield to financial close.",
    icon: "solar" as const,
  },
  {
    num: "02",
    cat: "Construction",
    title: "EPC Delivery",
    description:
      "Engineering, procurement and construction with our partner — a licensed power-industry design institute and general contractor with ISO 9001/14001/45001 systems and a China Southern Power Grid delivery record. Tier-1 equipment at Chinese supply-chain pricing.",
    icon: "bolt" as const,
  },
  {
    num: "03",
    cat: "Finance",
    title: "Project Finance",
    description:
      "Hybrid structures combining shareholder capital with contractor EPCF financing repaid through a revenue share — layered with the security package standard for DFI-supported African IPPs, engineered to remain bankable every operating year.",
    icon: "finance" as const,
  },
  {
    num: "04",
    cat: "Regulatory",
    title: "Regulatory Pathway",
    description:
      "Complete pathway management: environmental impact assessment, investment certification, generation licensing, import-duty remission and land registration — mapped in detail before capital is committed.",
    icon: "building" as const,
  },
  {
    num: "05",
    cat: "Operations",
    title: "O&M Asset Management",
    description:
      "SCADA-based performance monitoring, preventive maintenance and revenue settlement across the 25-year PPA lifecycle — delivered jointly with our partner's multi-year O&M business for Chinese grid companies.",
    icon: "shield" as const,
  },
  {
    num: "06",
    cat: "Expansion",
    title: "Pan-Africa Subsidiaries",
    description:
      "A replicable country-subsidiary model that carries the group's engineering, financing and management capability into new African markets — each subsidiary pursuing its own PPA, permits and financing.",
    icon: "globe" as const,
  },
] as const;

export const TRACK_RECORD = [
  {
    title: "Anogyra PV Park · Cyprus",
    subtitle: "Grid-connected · European Union",
    highlight: "5 MW",
    highlightLabel: "Installed capacity",
    description:
      "A completed grid-connected 5 MW solar PV park in Anogyra, Cyprus — developed and delivered within the EU regulatory environment, from licensing through construction to grid connection.",
    points: [
      "Dedicated SPV (P&O Anogyra Solar Park Ltd) with full licence transfer approved by CERA",
      "EPC under a fixed 240-day completion guarantee with delay penalty clauses",
      "Long-term PPA with 20-year fixed-rate bank financing through the Bank of Cyprus",
      "Institutional equity participation (regulated RAIF fund) via EU regulatory process",
    ],
  },
  {
    title: "Wuzhou PV Project · Guangxi, China",
    subtitle: "Strategic partner delivery",
    highlight: "40 MWp",
    highlightLabel: "Installed capacity",
    description:
      "A completed 40 MWp distributed photovoltaic installation across approximately 400,000 m² of industrial rooftops in Wuzhou — the largest single PV delivery in the group's track record.",
    points: [
      "Designed 2022 and delivered by our strategic partner",
      "Approx. 400,000 m² industrial rooftop installation area",
      "Part of a wider partner portfolio including Foshan, Qingyuan and Shenzhen PV",
      "Complementary BESS experience using CATL cells and Sungrow PCS (87–93% efficiency)",
    ],
  },
] as const;

export const PARTNER = {
  name: "Guangdong Jincheng Guangyi Electric Power Technology Co., Ltd",
  nameZh: "今程光一",
  founded: "2016",
  summary:
    "G3's delivery capability is anchored by our founding EPC and technology partner — founded in 2016 by professionals with nearly three decades in the Chinese power sector. The partner is a shareholder in the venture, not an arm's-length contractor: its engineering, balance sheet and reputation are committed to every G3 project.",
  credentials: [
    { label: "Design", value: "Licensed to design step-up substations and grid-connection infrastructure" },
    { label: "Construction", value: "Licensed general contractor for power construction works" },
    { label: "Automation", value: "SCADA, communications, and plant automation systems" },
    { label: "O&M", value: "Commissioning, testing, and long-term maintenance" },
    { label: "ISO Systems", value: "Quality, environmental and OHS management systems required by DFI lenders" },
  ],
  highlights: [
    "Construction on the Foshan 500kV Fengcheng (Shunde II) transmission and substation project — awarded China's highest construction quality prize",
    "Serves subsidiaries and contractors of China Southern Power Grid",
    "Ongoing provincial O&M frameworks with Guangdong grid communications companies",
  ],
} as const;

export const FLAGSHIP = {
  title: "Flagship Target · Rwanda",
  capacity: "100–150 MW",
  capacityNote: "Utility-scale solar PV, grid-connected IPP; battery storage if grid studies support it",
  location: "Eastern Province, Rwanda — the country's strongest solar resource zone, prioritised in national transmission planning",
  offtake: "Long-term Power Purchase Agreement with the national utility",
  technology:
    "Tier-1 modules and inverters sourced directly through our partner's supply chain; SCADA-monitored operations",
  tariff: "Highly competitive tariff, enabled by direct supply-chain access and contractor financing",
  logistics: "Equipment via the China–Mombasa–Kigali corridor (approx. 40–50 days transit)",
  regulatoryNote:
    "Every regulatory step has been mapped against Rwanda's frameworks — RDB investment certification, REMA environmental assessment, RURA generation licensing, EDCL/EUCL power-purchase contracting, and RRA import-duty remission.",
  phases: [
    { num: "01", title: "Secure & Study", description: "Site securing under Rwanda's 49-year lease framework; resource assessment and grid studies" },
    { num: "02", title: "Permit", description: "Environmental impact assessment, investment certification, and generation licence" },
    { num: "03", title: "Finance & PPA", description: "Power purchase agreement, security package, and financing execution" },
    { num: "04", title: "Build & Operate", description: "EPC construction, commissioning, and 25-year O&M" },
  ],
} as const;

export const IMPACT_METRICS = [
  {
    value: "1.5 GW",
    label: "National Solar Target by 2050",
    description:
      "Rwanda's Least Cost Power Development Plan targets nearly 1.5 GW of solar PV and battery storage.",
  },
  {
    value: "100–150",
    label: "MW Flagship Capacity",
    description: "Utility-scale IPP targeted for Eastern Province, Rwanda's strongest solar resource zone.",
  },
  {
    value: "5 MW",
    label: "EU Project Delivered",
    description: "Completed Anogyra solar park in Cyprus — licensed, financed and grid-connected.",
    count: 5,
    suffix: " MW",
  },
  {
    value: "40 MWp",
    label: "Partner PV Delivery",
    description: "Largest single PV delivery in the group's track record — Wuzhou, Guangxi.",
    count: 40,
    suffix: " MWp",
  },
] as const;

export const EXPANSION = [
  {
    phase: "Now",
    title: "Rwanda",
    description:
      "Deliver the flagship project to international standards — the foundation of everything that follows.",
  },
  {
    phase: "Next",
    title: "East Africa",
    description:
      "Uganda, Kenya, Tanzania — replicated through country subsidiaries under the G3 parent.",
  },
  {
    phase: "Then",
    title: "The Continent",
    description:
      "Central, Southern and West Africa as our portfolio, team and balance sheet grow.",
  },
] as const;

export const MARKETS = [
  "Rwanda — HQ",
  "Uganda",
  "Kenya",
  "Tanzania",
] as const;

export const VALUES = [
  {
    num: "01",
    title: "Environmental Integrity",
    description:
      "Full EIA with public consultation before construction. Zero operational carbon emissions. Biodiversity screening and minimal agricultural land take in site selection. End-of-life panel recycling embedded in O&M planning.",
  },
  {
    num: "02",
    title: "Community First",
    description:
      "Land compensation at or above national legal standards. Local hiring priority from host districts. Community engagement and grievance mechanism from day one of land discussions.",
  },
  {
    num: "03",
    title: "Skills & Transparency",
    description:
      "Structured skills transfer from partner engineers to Rwandan technicians. Annual public reporting on impact commitments. DFI-aligned governance throughout.",
  },
] as const;

export const ENQUIRY_TYPES = [
  "Investment Partnership",
  "Government / Utility",
  "DFI / Lender",
  "EPC / Technology Partner",
  "General Inquiry",
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Solar IPP Development", href: "#services" },
      { label: "EPC Delivery", href: "#services" },
      { label: "Project Finance", href: "#services" },
      { label: "O&M Services", href: "#services" },
      { label: "Regulatory Pathway", href: "#services" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Rwanda", href: "#flagship" },
      { label: "East Africa", href: "#markets" },
      { label: "Track Record", href: "#track-record" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About G3", href: "#about" },
      { label: "Vision & Mission", href: "#about" },
      { label: "Partnership", href: "#partner" },
      { label: "Contact", href: "#contact" },
    ],
  },
] as const;
