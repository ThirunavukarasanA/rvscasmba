/**
 * Default copy for metadata + WebPage JSON-LD (`name` / `description`).
 * Edit here when you finalize metatags, OG/Twitter (via `buildPageMetadata`), and JSON-LD text per route.
 * Each app route page imports the matching entry and passes `path` + `buildPageMetadata` / `getWebPageJsonLd`.
 */
export type RouteSeoEntry = {
  title: string;
  description: string;
  /** Schema.org WebPage `name` (can match title or be more descriptive). */
  jsonLdName: string;
};

export const ROUTE_SEO: Record<string, RouteSeoEntry> = {
  "/": {
    title: "Management Education for the Digital Era",
    description:
      "RVS CAS MBA prepares techno-managers who combine strong business fundamentals with technology, analytics, and real-world decision-making.",
    jsonLdName: "RVS CAS MBA",
  },
  "/about": {
    title: "About",
    description:
      "Learn about RVS CAS MBA, our faculty, campus, and what makes us a top choice for management education.",
    jsonLdName: "About RVS CAS MBA",
  },
  "/admissions": {
    title: "Admissions",
    description:
      "A transparent, student-focused admission process designed to help you make informed decisions about your MBA journey.",
    jsonLdName: "Admissions at RVS CAS MBA",
  },
  "/alumni": {
    title: "Alumni",
    description: "Alumni at RVS CAS MBA",
    jsonLdName: "RVS CAS MBA Alumni",
  },
  "/careers": {
    title: "Careers",
    description:
      "Join a community committed to rigorous teaching and applied learning.",
    jsonLdName: "Careers at RVS CAS MBA",
  },
  "/contact": {
    title: "Contact the RVS CAS MBA Office",
    description:
      "If you have questions about the MBA program, admissions process, eligibility, or next steps, we’re here to help. Our team is available to support you at every stage — from initial enquiries to application guidance and enrollment.",
    jsonLdName: "Contact the RVS CAS MBA Office",
  },
  "/events": {
    title: "Events",
    description:
      "Events at the RVS CAS MBA bring together students, faculty, alumni, and industry professionals to explore ideas, share experience, and deepen understanding of business, analytics, marketing, and leadership.",
    jsonLdName: "Events at RVS CAS MBA",
  },
  "/events/featured-events": {
    title: "Featured Events",
    description:
      "Featured Events at RVS CAS MBA highlight important academic forums, industry discussions, workshops, and conferences that bring together students, faculty, alumni, and professionals.",
    jsonLdName: "Featured Events at RVS CAS MBA",
  },
  "/faq": {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about RVS CAS MBA programs, admissions, curriculum, student experience, and more.",
    jsonLdName: "Frequently Asked Questions",
  },
  "/how-to-apply": {
    title: "How to Apply",
    description:
      "Step-by-step guide to applying for MBA programs at RVS CAS MBA. Learn about requirements, deadlines, and the application process.",
    jsonLdName: "How to Apply — RVS CAS MBA",
  },
  "/industry-connect": {
    title: "Industry Connect",
    description: "Industry Connect at RVS CAS MBA",
    jsonLdName: "Industry Connect at RVS CAS MBA",
  },
  "/insights": {
    title: "Insights",
    description: "Insights — RVS CAS MBA",
    jsonLdName: "Insights — RVS CAS MBA",
  },
  "/internships": {
    title: "Internships",
    description: "Internships at RVS CAS MBA",
    jsonLdName: "Internships at RVS CAS MBA",
  },
  "/faculty": {
    title: "Faculty",
    description:
      "Faculty at the RVS CAS MBA bring together academic rigor, applied insight, and mentorship.",
    jsonLdName: "Faculty at RVS CAS MBA",
  },
  "/placements": {
    title: "Placements",
    description: "Structured preparation. Measurable readiness. Purposeful outcomes.",
    jsonLdName: "Placements at RVS CAS MBA",
  },
  "/programs": {
    title: "MBA Programs",
    description:
      "Explore MBA programs at RVS CAS, designed to equip you with essential management skills, leadership qualities, and industry exposure to excel in your career.",
    jsonLdName: "MBA Degree Program — RVS CAS MBA",
  },
  "/programs/mba-artificial-intelligence": {
    title: "MBA in Artificial Intelligence",
    description:
      "MBA in Artificial Intelligence focused on problem-first, decision-oriented learning with applied AI, analytics, and business judgment.",
    jsonLdName: "MBA in Artificial Intelligence — RVS CAS MBA",
  },
  "/programs/mba-digital-marketing": {
    title: "MBA in Digital Marketing",
    description:
      "MBA in Digital Marketing at RVS CAS focused on strategy, execution, and performance-driven decisions in digital environments.",
    jsonLdName: "MBA in Digital Marketing — RVS CAS MBA",
  },
  "/programs/mba-global-finance-corporate-analyst": {
    title: "MBA in Global Finance & Corporate Analyst",
    description:
      "MBA in Global Finance & Corporate Analyst focused on financial judgment, FP&A thinking, and decision-making under uncertainty.",
    jsonLdName: "MBA in Global Finance & Corporate Analyst — RVS CAS MBA",
  },
  "/programs/mba-human-resources": {
    title: "MBA in Human Resources",
    description:
      "Build organizational capability with clarity, structure, and people insight.",
    jsonLdName: "MBA in Human Resources — RVS CAS MBA",
  },
  "/programs/mba-logistics-supply-chain-management": {
    title: "MBA in Logistics & Supply Chain Management",
    description:
      "Design systems, optimize flow, and build strategic supply chain capability with analytics and operational decision-making.",
    jsonLdName: "MBA in Logistics & Supply Chain Management — RVS CAS MBA",
  },
  "/request-information": {
    title: "Request Information",
    description:
      "Learn more about RVS CAS MBA programs, admissions, and the student experience. Get in touch with our admissions team.",
    jsonLdName: "Request Information — RVS CAS MBA",
  },
  "/search": {
    title: "Search Results",
    description: "Search results for RVS CAS MBA",
    jsonLdName: "Search — RVS CAS MBA",
  },
  "/student-experience": {
    title: "Student Experience",
    description:
      "An immersive learning environment that extends beyond the classroom. Discover life at RVS CAS MBA.",
    jsonLdName: "Student Experience at RVS CAS MBA",
  },
  "/thinking-like-a-financial-analyst": {
    title: "Thinking Like a Financial Analyst",
    description:
      "A learning series by Dr. K. Senthil Ganesh. Finance is not about formulas—it is about judgment. 66 focused lessons on how real financial analysts think.",
    jsonLdName: "Thinking Like a Financial Analyst — RVS CAS MBA",
  },
};
