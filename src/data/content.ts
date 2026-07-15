export const SITE = {
  name: "G3 Energy International",
  shortName: "G3",
  tagline: "Global · Green · Growth",
  description:
    "G3 Energy International is a pan-African renewable energy company building utility-scale solar power plants that fuel economic growth, energy security, and sustainable development across the continent.",
  email: "info@g3energy.com",
  partnershipsEmail: "partnerships@g3energy.com",
  website: "www.g3energy.com",
  location: "Kigali, Rwanda · East Africa",
  registered: "Rwanda Development Board · G3 Energy International Ltd",
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#impact", label: "Impact" },
  { href: "#markets", label: "Markets" },
  { href: "#team", label: "Team" },
] as const;

export const TICKER_ITEMS = [
  "Solar IPP Development",
  "Pan-African Expansion",
  "1,500 MW LCPDP Pipeline",
  "DFI-Grade Standards",
  "Solar + BESS Solutions",
  "Powering Africa's Future",
] as const;

export const HERO_STATS = [
  { value: "$50M+", label: "Pipeline Value", count: 50, prefix: "$", suffix: "M+" },
  { value: "25yr", label: "PPA Horizon" },
  { value: "5+", label: "Target Markets", count: 5, suffix: "+" },
  { value: "100%", label: "Renewable" },
] as const;

export const ABOUT_FEATURES = [
  {
    title: "Rwanda-Registered, Africa-Focused",
    description:
      "Headquartered in Kigali — registered with RDB, backed by Sino-African joint venture capital and DFI partnerships.",
    icon: "star" as const,
  },
  {
    title: "Pan-African Expansion Model",
    description:
      "Rwanda is our launch pad. Building a continental portfolio across East, Central and West Africa through dedicated subsidiaries.",
    icon: "globe" as const,
  },
  {
    title: "DFI-Grade Standards",
    description:
      "Our projects comply with World Bank, IFC, and AfDB requirements — built to attract concessional finance and sovereign guarantees.",
    icon: "shield" as const,
  },
] as const;

export const PILLARS = [
  { letter: "G", title: "Global", subtitle: "Continental reach" },
  { letter: "G", title: "Green", subtitle: "100% renewable" },
  { letter: "G", title: "Growth", subtitle: "Economic impact" },
] as const;

export const SERVICES = [
  {
    num: "01",
    cat: "Core Service",
    title: "Solar IPP Development",
    description:
      "Utility-scale solar PV power plants connected to national grids under 20–25 year Power Purchase Agreements with EUCL and partner utilities.",
    icon: "solar" as const,
  },
  {
    num: "02",
    cat: "Construction",
    title: "EPC Contracting",
    description:
      "Full engineering, procurement & construction with tier-1 Chinese technology partners delivering competitive global pricing.",
    icon: "bolt" as const,
  },
  {
    num: "03",
    cat: "Finance",
    title: "Project Finance Structuring",
    description:
      "Complex financing packages combining DFI debt, MIGA guarantees, EPCF contractor funding, and sovereign backstops.",
    icon: "finance" as const,
  },
  {
    num: "04",
    cat: "Regulatory",
    title: "Green Consulting & EIA",
    description:
      "Full regulatory pathway management: EIA, RURA generation licensing, RDB investment certificates, and RRA import duty waivers.",
    icon: "building" as const,
  },
  {
    num: "05",
    cat: "Operations",
    title: "O&M Asset Management",
    description:
      "Long-term operations & maintenance ensuring maximum plant performance and availability across the 25-year PPA lifecycle.",
    icon: "shield" as const,
  },
  {
    num: "06",
    cat: "Expansion",
    title: "Pan-Africa Development",
    description:
      "Replicating the Rwanda blueprint across East, Central & West Africa through country-specific subsidiaries under the G3EI parent.",
    icon: "globe" as const,
  },
] as const;

export const IMPACT_METRICS = [
  {
    value: "1,500",
    label: "MW Solar Target",
    description: "Rwanda LCPDP 2024–2050 pipeline we are positioned to serve",
    count: 1500,
  },
  {
    value: "$296M",
    label: "25-yr Net Income",
    description: "Projected investor returns over the operating lifetime of our first project",
    count: 296,
    prefix: "$",
    suffix: "M",
  },
  {
    value: "84.6%",
    label: "Rwanda Electrification",
    description: "Current access rate — we're helping close the remaining 15.4% gap",
    count: 84.6,
    suffix: "%",
    decimals: 1,
  },
  {
    value: "4.2yr",
    label: "Payback Period",
    description: "Well below the 6–8 year industry standard for African solar projects",
    count: 4.2,
    suffix: "yr",
    decimals: 1,
  },
] as const;

export const MARKETS = [
  "Rwanda — HQ",
  "Uganda",
  "Kenya",
  "Tanzania",
  "DRC",
  "Ethiopia",
  "Zambia",
  "Nigeria",
  "Ghana",
  "Senegal",
  "Mozambique",
  "Zimbabwe",
] as const;

export const VALUES = [
  {
    num: "01",
    title: "Transparent Partnership",
    description:
      "We structure every deal so all parties win. Our 80/20 revenue split model ensures DSCR above bank minimums from day one — governments, lenders, contractors, and equity investors all aligned.",
  },
  {
    num: "02",
    title: "Technology Excellence",
    description:
      "We partner with tier-1 Chinese manufacturers — the world's most competitive solar supply chain — to deliver the lowest LCOE possible while meeting international DFI quality standards.",
  },
  {
    num: "03",
    title: "Local Impact First",
    description:
      "Every project prioritizes local employment, community compensation, environmental compliance, and skills transfer. We build for the 25-year horizon, not just financial close.",
  },
] as const;

export const TEAM = [
  {
    initials: "EM",
    name: "Eric Mugisha",
    role: "Co-Founder & CEO",
    bio: "Energy sector strategist with deep regulatory and institutional expertise in Rwanda's financial and energy sector.",
    variant: 1 as const,
  },
  {
    initials: "XL",
    name: "Partner One",
    role: "Co-Founder & CTO",
    bio: "Chinese energy technology partner. 15+ years in utility-scale solar EPC across Asia and Africa.",
    variant: 2 as const,
  },
  {
    initials: "ZW",
    name: "Partner Two",
    role: "Co-Founder & CFO",
    bio: "Chinese project finance expert. Structured $500M+ in renewable energy transactions across emerging markets.",
    variant: 3 as const,
  },
  {
    initials: "TBA",
    name: "To Be Appointed",
    role: "Country Director",
    bio: "Senior energy professional to lead Rwanda operations, EDCL liaison, and RURA regulatory interface.",
    variant: 4 as const,
  },
] as const;

export const ENQUIRY_TYPES = [
  "Investment Partnership",
  "EPC / Contractor",
  "Government / Regulatory",
  "DFI / Lender",
  "General Inquiry",
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Solar IPP Development", href: "#services" },
      { label: "EPC Contracting", href: "#services" },
      { label: "Project Finance", href: "#services" },
      { label: "O&M Services", href: "#services" },
      { label: "Green Consulting", href: "#services" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Rwanda", href: "#markets" },
      { label: "Uganda", href: "#markets" },
      { label: "Kenya", href: "#markets" },
      { label: "Tanzania", href: "#markets" },
      { label: "DRC", href: "#markets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About G3", href: "#about" },
      { label: "Leadership", href: "#team" },
      { label: "Investors", href: "#contact" },
      { label: "Careers", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
] as const;
