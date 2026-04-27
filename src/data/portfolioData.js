// ===================== PERSONAL INFO =====================
export const personalInfo = {
  name: "Muthu Kumar",
  title: "Software Engineer – Aspiring SDET",
  taglines: [
    "Software Engineer",
    "Aspiring SDET",
    "Playwright & Selenium Expert",
    "BDD Framework Architect",
    "ISTQB Certified Tester",
  ],
  bio: "3.2+ years of experience in software testing with hands-on expertise in test automation using Java, Playwright, Selenium, TestNG, and REST Assured. My core aim is to transition into an SDET role, building robust, scalable automation architectures. Experienced in building automation frameworks from scratch, API testing, manual testing, and managing test lifecycles in OpenText ALM. ISTQB Foundation Level certified.",
  location: "India",
  email: "muthukumart2912@gmail.com",
  phone: "+91 88838 75461",
  github: "https://github.com/muthukumart2912",
  linkedin: "https://www.linkedin.com/in/muthukumart2912",
  twitter: "https://twitter.com/muthukumar",
  resumeLink: "/MUTHU_KUMAR_RESUME.docx",
  availability: "Open to Opportunities",
};

// ===================== SKILLS =====================
export const skills = [
  {
    category: "Test Automation",
    icon: "🤖",
    color: "#7c3aed",
    items: [
      { name: "Playwright (Java/TypeScript)", level: 92 },
      { name: "Selenium WebDriver", level: 90 },
      { name: "TestNG", level: 92 },
      { name: "Cucumber BDD / Gherkin", level: 88 },
      { name: "Appium (Mobile – Basic)", level: 55 },
    ],
  },
  {
    category: "API & Performance",
    icon: "⚡",
    color: "#06b6d4",
    items: [
      { name: "REST Assured (Java)", level: 88 },
      { name: "Postman", level: 90 },
      { name: "Apache JMeter", level: 80 },
      { name: "JSON Path & Hamcrest", level: 85 },
      { name: "Oracle Integration Cloud (OIC)", level: 75 },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "🛠️",
    color: "#ec4899",
    items: [
      { name: "Playwright Hybrid POM", level: 92 },
      { name: "Selenium Hybrid POM", level: 90 },
      { name: "BDD Framework (Cucumber)", level: 88 },
      { name: "GitHub Actions / Jenkins", level: 85 },
      { name: "OpenText HP ALM", level: 88 },
    ],
  },
  {
    category: "Languages & DB",
    icon: "💻",
    color: "#f59e0b",
    items: [
      { name: "Java", level: 90 },
      { name: "PostgreSQL / JDBC", level: 78 },
      { name: "Apache POI (Excel)", level: 85 },
      { name: "Spring Boot (Basic)", level: 65 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
  {
    category: "Reporting & AI",
    icon: "📊",
    color: "#22c55e",
    items: [
      { name: "Extent Reports", level: 90 },
      { name: "Allure Reports", level: 80 },
      { name: "GitHub Copilot (AI Testing)", level: 82 },
      { name: "Playwright MCP Server", level: 78 },
      { name: "RTM / Test Documentation", level: 92 },
    ],
  },
];

// ===================== PROJECTS =====================
export const projects = [
  {
    id: 1,
    title: "Labware LIMS – CLIA Automation",
    description:
      "Hybrid automation framework built from scratch using Playwright, Java, TestNG & Extent Reports covering Data-Driven and Keyword-Driven approaches. Automated 80+ test scripts across 500+ requirements for Labware LIMS 7 CLIA module. Eliminated manual HL7 message verification using Java HAPI library.",
    tags: ["Java", "Playwright", "TestNG", "REST Assured", "JMeter", "HAPI", "ALM"],
    github: null,
    live: null,
    category: "Healthcare",
    featured: true,
    domain: "Healthcare / Life Sciences",
    duration: "Aug 2024 – Apr 2026",
    stats: { Scripts: "80+", Requirements: "500+", Coverage: "Full" },
  },
  {
    id: 2,
    title: "Labware LIMS – CRS BDD Framework",
    description:
      "BDD automation framework using Cucumber, Selenium, TestNG & Java with Gherkin syntax to improve collaboration between developers, testers & stakeholders. Integrated with Jenkins for CI/CD. Used OpenText ALM for test management and Extent Reports for comprehensive reporting.",
    tags: ["Java", "Selenium", "Cucumber", "TestNG", "Jenkins", "ALM", "Gherkin"],
    github: null,
    live: null,
    category: "Healthcare",
    featured: true,
    domain: "Healthcare / Life Sciences",
    duration: "Aug 2024 – Apr 2026",
    stats: { Type: "BDD", CI: "Jenkins", Reports: "Extent" },
  },
  {
    id: 3,
    title: "URS Document & RTM Auto-Generator",
    description:
      "Spring Boot utility application using Apache POI to auto-generate URS (User Requirement Specification) documents and RTM Excel reports. Received direct client appreciation — significantly reduced manual effort for the BA team and simplified traceability for manual testers.",
    tags: ["Spring Boot", "Apache POI", "Java", "Excel", "Word", "REST API"],
    github: null,
    live: null,
    category: "Tools",
    featured: true,
    domain: "Internal Tool",
    duration: "2024",
    stats: { Impact: "High", "Effort Saved": "Significant", Appreciation: "Client" },
  },
  {
    id: 4,
    title: "API Test Automation – REST Assured",
    description:
      "Automated 500+ Oracle Integration Cloud integrations using REST Assured and Java with TestNG. Validated response codes, headers, response time & payload using JSON Path expressions and Hamcrest Matchers. Initially validated manually via Postman before full automation.",
    tags: ["REST Assured", "Java", "TestNG", "Postman", "JSON Path", "Hamcrest"],
    github: null,
    live: null,
    category: "API",
    featured: false,
    domain: "Oracle Integration Cloud",
    duration: "Jan 2023 – Jul 2024",
    stats: { Integrations: "500+", Assertions: "Multi-layer", Reports: "TestNG" },
  },
  {
    id: 5,
    title: "Selenium UI Automation – Ticketing Tool",
    description:
      "Automated 30+ end-to-end test cases using Selenium for an internal ticketing tool, covering complete workflows. Cross-browser testing on Chrome, Firefox, and Edge.",
    tags: ["Selenium", "Java", "TestNG", "Cross-browser", "Automation"],
    github: null,
    live: null,
    category: "Tools",
    featured: false,
    domain: "Internal Tool",
    duration: "2023",
    stats: { "Test Cases": "30+", Browsers: "3", "Type": "E2E" },
  },
  {
    id: 6,
    title: "AI-Assisted Test Generation (Playwright MCP)",
    description:
      "Leveraged Playwright MCP Server with GitHub Copilot (TypeScript) for AI-assisted test script generation on internal products. Explored cutting-edge AI tooling to accelerate test authoring and coverage.",
    tags: ["Playwright", "TypeScript", "GitHub Copilot", "AI Testing", "MCP"],
    github: null,
    live: null,
    category: "AI",
    featured: false,
    domain: "Internal Product",
    duration: "2025",
    stats: { Tools: "Copilot + MCP", Lang: "TypeScript", "Area": "AI QA" },
  },
];

// ===================== EXPERIENCE =====================
export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Hephzibah Technologies India Pvt Ltd",
    period: "Aug 2024 – Apr 2026",
    location: "India",
    type: "Full-time",
    description:
      "Led automation engineering for Labware LIMS 7, gaining practical knowledge and familiarity with the Healthcare/Life Sciences domain. Built hybrid POM and BDD frameworks from scratch with Playwright, Selenium, Cucumber, TestNG & REST Assured. Served as automation team lead for last 6 months.",
    achievements: [
      "Automated 80+ test scripts covering 500+ requirements for Labware LIMS 7",
      "Eliminated manual HL7 segment verification using Java HAPI library",
      "Reworked framework to support Playwright parallel execution — cut suite run time significantly",
      "Built Spring Boot + Apache POI report generator — received direct client appreciation",
      "Served as Automation Team Lead (3 members) — represented team in daily stakeholder calls",
      "Integrated CI/CD pipeline with GitHub Actions and Jenkins",
      "Leveraged Playwright MCP Server + GitHub Copilot (TypeScript) for AI-assisted test generation",
      "Managed full test lifecycle in OpenText HP ALM — scripting, execution, defect tracking",
    ],
    tech: ["Java", "Playwright", "Selenium", "TestNG", "Cucumber", "REST Assured", "JMeter", "GitHub Actions", "Jenkins", "OpenText ALM"],
  },
  {
    id: 2,
    role: "Associate Consultant",
    company: "3i-Infotech",
    period: "Jan 2023 – Jul 2024",
    location: "India",
    type: "Full-time",
    description:
      "Tested Oracle Integration Cloud (OIC) integrations end-to-end via Postman, validated BI reports in Oracle Fusion ERP, and automated UI test cases using Selenium for an internal ticketing tool.",
    achievements: [
      "Tested 500+ Oracle Integration Cloud integrations end-to-end via Postman",
      "Validated 50+ Business Intelligence reports (Word & PDF) against requirements in Oracle Fusion ERP",
      "Automated 30+ test cases using Selenium for internal ticketing tool",
      "Gained hands-on experience with Oracle Cloud Infrastructure (OCI) – Compute module",
    ],
    tech: ["Postman", "Selenium", "Oracle Fusion ERP", "OIC", "OCI", "SQL", "BI Reports"],
  },
  {
    id: 3,
    role: "Intern",
    company: "3i-Infotech",
    period: "Jul 2022 – Jan 2023",
    location: "India",
    type: "Internship",
    description:
      "Received training in Oracle Integration Cloud, Business Intelligence Report Testing, and SQL. Gained foundational exposure to enterprise testing workflows.",
    achievements: [
      "Trained in Oracle Integration Cloud (OIC) fundamentals",
      "Hands-on with Business Intelligence Report Testing",
      "Learned SQL for database validation",
      "Onboarded into enterprise testing methodologies (V-Model, Agile)",
    ],
    tech: ["Oracle Integration Cloud", "SQL", "BI Reporting", "Manual Testing"],
  },
];

// ===================== STATS =====================
export const stats = [
  { label: "Years Experience", value: "3.2+", icon: "🏆" },
  { label: "Test Scripts Built", value: "80+", icon: "🤖" },
  { label: "Requirements Covered", value: "500+", icon: "✅" },
  { label: "OIC Integrations Tested", value: "500+", icon: "⚡" },
];

// ===================== EDUCATION =====================
export const education = [
  {
    degree: "Bachelor of Engineering – Computer Science & Engineering",
    institution: "Annai Vailankanni College of Engineering",
    period: "2018 – 2022",
    grade: "CGPA: 7.81",
  },
];

// ===================== CERTIFICATIONS =====================
export const certifications = [
  {
    name: "ISTQB Software Testing Foundation Level",
    issuer: "ISTQB",
    icon: "🏅",
    color: "#7c3aed",
  },
  {
    name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuer: "Oracle",
    icon: "☁️",
    color: "#f59e0b",
  },
];
