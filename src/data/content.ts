/** Lean site copy from G3 Company Profile v3 — full picture, less noise. */

export const SITE = {
  name: "G3 Energy International",
  legalName: "G3 Energy International Ltd",
  shortName: "G3",
  tagline: "Global · Green · Growth",
  sector: "Independent Power Producer",
  profileYear: "2026",
  description:
    "A Rwanda-registered independent power producer based in Kigali. We develop, finance, build and operate utility-scale solar PV plants under long-term Power Purchase Agreements.",
  heroDescription:
    "G3 Energy International Ltd is a renewable energy company registered in Rwanda and headquartered in Kigali. We develop, engineer, finance and operate utility-scale solar photovoltaic power plants for connection to the national grid under long-term Power Purchase Agreements.",
  vision:
    "A trusted African IPP delivering clean energy that powers economic transformation across the continent.",
  mission:
    "Bankable utility-scale solar that delivers competitive power to national utilities and lasting benefit to host communities.",
  email: "info@g3energy.com",
  partnershipsEmail: "partnerships@g3energy.com",
  website: "www.g3energy.com",
  location: "Kigali, Rwanda",
  registered: "Rwanda Development Board (RDB), Kigali",
  partnerLine:
    "Sino-African venture — Rwandan-led, with founding EPC shareholder Guangdong Jincheng Guangyi Electric Power Technology Co., Ltd (今程光一).",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#capability", label: "Capability" },
  { href: "#rwanda", label: "Rwanda" },
  { href: "#impact", label: "Impact" },
] as const;

export const TICKER_ITEMS = [
  "Independent Power Producer",
  "Utility-Scale Solar PV",
  "5 MW Cyprus Delivered",
  "40 MWp Partner Track Record",
  "100–150 MW Rwanda Flagship",
  "ISO 9001 · 14001 · 45001",
  "DFI-Aligned Governance",
  "Global · Green · Growth",
] as const;

export const HERO_STATS = [
  { value: "5 MW", label: "Cyprus PV Delivered", count: 5, suffix: " MW" },
  { value: "40 MWp", label: "Wuzhou Project", count: 40, suffix: " MWp" },
  { value: "100–150", label: "MW Rwanda Flagship" },
  { value: "25yr", label: "PPA & O&M Horizon" },
] as const;

export const PILLARS = [
  { letter: "G", title: "Global", subtitle: "International standards from day one" },
  { letter: "G", title: "Green", subtitle: "100% renewable generation" },
  { letter: "G", title: "Growth", subtitle: "Economic development first" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "Solar IPP Development",
    description: "Greenfield to financial close — site, PPA, licensing and grid connection.",
    icon: "solar" as const,
  },
  {
    num: "02",
    title: "EPC Delivery",
    description: "Partner-led construction with ISO systems and tier-1 Chinese supply chain.",
    icon: "bolt" as const,
  },
  {
    num: "03",
    title: "Project Finance",
    description: "Shareholder capital, EPCF and DFI-grade structures built to stay bankable.",
    icon: "finance" as const,
  },
  {
    num: "04",
    title: "Regulatory Pathway",
    description: "EIA, RDB, RURA, RRA and land — mapped before capital is committed.",
    icon: "building" as const,
  },
  {
    num: "05",
    title: "O&M",
    description: "SCADA monitoring and maintenance across the full 25-year PPA life.",
    icon: "shield" as const,
  },
  {
    num: "06",
    title: "Pan-Africa Growth",
    description: "Country subsidiaries that reuse G3 engineering, finance and management.",
    icon: "globe" as const,
  },
] as const;

export const PROJECTS = [
  {
    title: "Anogyra PV Park",
    place: "Cyprus · EU",
    highlight: "5 MW",
    summary:
      "Grid-connected solar delivered under EU licensing, CERA approval, Bank of Cyprus financing and a long-term PPA.",
  },
  {
    title: "Wuzhou PV Project",
    place: "Guangxi, China",
    highlight: "40 MWp",
    summary:
      "Largest partner PV delivery — ~400,000 m² of industrial rooftops, designed and built by our strategic shareholder.",
  },
] as const;

export const CREDENTIALS = [
  { grade: "ISO 9001 / 14001 / 45001", label: "Quality, environment & OHS" },
  { grade: "Grade B", label: "Power design · transmission & substation" },
  { grade: "Grade 3", label: "Power engineering general contracting" },
  { grade: "AA", label: "Bank of China credit rating" },
  { grade: "Grade A", label: "Taxpayer · 2025–2026" },
  { grade: "23 Patents", label: "3 invention · 20 utility model" },
] as const;

export const RWANDA = {
  capacity: "100–150 MW",
  location: "Eastern Province — Rwanda's strongest solar resource zone",
  offtake: "Long-term PPA with the national utility",
  note: "Regulatory pathway mapped: RDB, REMA, RURA, EDCL/EUCL and RRA.",
  metrics: [
    { value: "1,493 MW", label: "National solar target by 2050", count: 1493, suffix: " MW" },
    { value: "84.6%", label: "Electrification rate", count: 84.6, suffix: "%", decimals: 1 },
    { value: "600 km", label: "New transmission planned", count: 600, suffix: " km" },
  ],
  expansion: [
    { phase: "Now", title: "Rwanda", description: "Deliver the flagship to international standards." },
    { phase: "Next", title: "East Africa", description: "Uganda, Kenya, Tanzania via subsidiaries." },
    { phase: "Then", title: "The Continent", description: "Central, Southern and West Africa over time." },
  ],
} as const;

export const ESG = [
  {
    title: "Environmental",
    items: [
      "Full EIA with public consultation",
      "Zero operational carbon · biodiversity-aware siting",
    ],
  },
  {
    title: "Social",
    items: [
      "Fair land compensation and local hiring",
      "Skills transfer to Rwandan technicians",
    ],
  },
  {
    title: "Community",
    items: [
      "Engagement and grievance from day one",
      "End-of-life recycling · annual impact reporting",
    ],
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
    title: "Explore",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Capability", href: "#capability" },
    ],
  },
  {
    title: "Focus",
    links: [
      { label: "Rwanda Flagship", href: "#rwanda" },
      { label: "ESG Impact", href: "#impact" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: SITE.legalName, href: "#about" },
      { label: "Registered with RDB", href: "#about" },
      { label: SITE.email, href: "#contact" },
    ],
  },
] as const;
