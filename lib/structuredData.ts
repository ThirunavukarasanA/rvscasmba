import type { FacultyMember } from "@/lib/data/faculty";
import { absoluteUrl, getSiteUrl } from "@/lib/site";

/** Optional social profile URLs — set NEXT_PUBLIC_ORG_YOUTUBE, NEXT_PUBLIC_ORG_LINKEDIN */
function orgSameAs(): string[] {
  const out: string[] = [];
  const yt = process.env.NEXT_PUBLIC_ORG_YOUTUBE?.trim();
  const li = process.env.NEXT_PUBLIC_ORG_LINKEDIN?.trim();
  if (yt) out.push(yt);
  if (li) out.push(li);
  return out;
}

function institutionNode(): Record<string, unknown> {
  const base = getSiteUrl();
  const logoUrl = absoluteUrl("/images/header/RVSCAS_Logo.svg");
  const institution: Record<string, unknown> = {
    "@type": "CollegeOrUniversity",
    "@id": `${base}/#institution`,
    name: "RVS College of Arts & Science",
    alternateName: ["RVS CAS", "RVS College of Arts and Science"],
    url: base,
    logo: logoUrl,
    description:
      "A NAAC A+ accredited institution with over 40 years of academic excellence, focused on industry-aligned education and outcome-driven programs.",
  };
  const sameAs = orgSameAs();
  if (sameAs.length > 0) {
    institution.sameAs = sameAs;
  }
  return institution;
}

function webSiteNode(): Record<string, unknown> {
  const base = getSiteUrl();
  return {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: "RVS CAS MBA",
    publisher: { "@id": `${base}/#institution` },
    inLanguage: "en",
    description:
      "Official MBA program site for RVS College of Arts & Science — programs, admissions, placements, and learning resources.",
  };
}

/**
 * Minimal graph for root layout: institution + WebSite.
 * Inner pages add `getWebPageJsonLd` or home adds `getHomeSupplementaryJsonLd`.
 */
export function getGlobalOrganizationJsonLd(): {
  "@context": string;
  "@graph": Record<string, unknown>[];
} {
  return {
    "@context": "https://schema.org",
    "@graph": [institutionNode(), webSiteNode()],
  };
}

/**
 * MBA program graph (department, course, specializations, learning series, terms).
 * Emit on the homepage only, alongside layout global JSON-LD (linked by @id).
 */
export function getHomeSupplementaryJsonLd(): {
  "@context": string;
  "@graph": Record<string, unknown>[];
} {
  const base = getSiteUrl();

  const department: Record<string, unknown> = {
    "@type": "EducationalOrganization",
    "@id": `${base}/#mba-department`,
    name: "RVS CAS MBA Program",
    parentOrganization: { "@id": `${base}/#institution` },
    url: absoluteUrl("/programs"),
    description:
      "An MBA program designed around how business actually works, focused on developing analytical thinking, judgment, and real-world decision-making skills.",
  };

  const mbaCourse: Record<string, unknown> = {
    "@type": "Course",
    "@id": `${base}/#mba-course`,
    name: "MBA at RVS CAS",
    url: absoluteUrl("/programs"),
    provider: { "@id": `${base}/#institution` },
    isPartOf: { "@id": `${base}/#mba-department` },
    educationalCredentialAwarded: "Master of Business Administration",
    courseMode: ["Full-time"],
    inLanguage: "en",
    description:
      "A practice-driven MBA designed to help students build analytical judgment and decision-making across finance, marketing, operations, people strategy, and technology—aligned with real business constraints.",
    teaches: [
      "Financial analysis and interpretation",
      "Return on capital (ROIC) thinking",
      "Business model analysis",
      "Data-driven and AI-assisted decision-making",
      "Corporate finance",
      "Strategic thinking",
      "Capital allocation",
      "Marketing and growth analytics",
      "People and organizational leadership",
    ],
    educationalLevel: "Postgraduate",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType:
        "Graduates and early-career professionals seeking management roles in analytics, finance, marketing, HR, and supply chain",
    },
  };

  const specializationPaths = [
    {
      name: "MBA in Global Finance & Corporate Analyst",
      path: "/programs/mba-global-finance-corporate-analyst",
    },
    {
      name: "MBA in Artificial Intelligence",
      path: "/programs/mba-artificial-intelligence",
    },
    {
      name: "MBA in Logistics & Supply Chain Management",
      path: "/programs/mba-logistics-supply-chain-management",
    },
    {
      name: "MBA in Digital Marketing",
      path: "/programs/mba-digital-marketing",
    },
    {
      name: "MBA in Human Resources",
      path: "/programs/mba-human-resources",
    },
  ] as const;

  const itemList: Record<string, unknown> = {
    "@type": "ItemList",
    "@id": `${base}/#mba-specializations`,
    name: "MBA Specializations at RVS CAS",
    numberOfItems: specializationPaths.length,
    itemListElement: specializationPaths.map((spec, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: spec.name,
        url: absoluteUrl(spec.path),
        provider: { "@id": `${base}/#institution` },
        isPartOf: { "@id": `${base}/#mba-course` },
      },
    })),
  };

  const learningSeries: Record<string, unknown> = {
    "@type": "CreativeWork",
    "@id": `${base}/#thinking-like-a-financial-analyst`,
    name: "Thinking Like a Financial Analyst",
    url: absoluteUrl("/thinking-like-a-financial-analyst"),
    creator: {
      "@type": "Person",
      name: "Dr. K. Senthil Ganesan",
    },
    about: [
      "Return on capital",
      "Accounting vs economic reality",
      "Business analysis",
      "Capital allocation",
      "Financial judgment",
    ],
    description:
      "A structured learning series on how financial analysts think—judgment, economic reality, and decisions beyond formulas.",
    isPartOf: { "@id": `${base}/#mba-department` },
  };

  const knowledgeDomains: Record<string, unknown> = {
    "@type": "DefinedTermSet",
    "@id": `${base}/#knowledge-domains`,
    name: "Core knowledge domains (MBA & analyst mindset)",
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        name: "Return on capital",
        description:
          "How efficiently a business converts committed capital into operating returns.",
      },
      {
        "@type": "DefinedTerm",
        name: "Accounting vs reality",
        description:
          "The gap between reported financial numbers and underlying business economics.",
      },
      {
        "@type": "DefinedTerm",
        name: "Intangible assets",
        description:
          "Value drivers such as brand, talent, and knowledge often under-represented on statements.",
      },
      {
        "@type": "DefinedTerm",
        name: "Capital allocation",
        description:
          "Deploying financial resources for long-term value creation.",
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      department,
      mbaCourse,
      itemList,
      learningSeries,
      knowledgeDomains,
    ],
  };
}

/** Event detail: Event + WebPage (server-render on `app/events/[slug]`). */
export function getEventDetailJsonLd(input: {
  path: string;
  name: string;
  description: string;
  image?: string;
}): {
  "@context": string;
  "@graph": Record<string, unknown>[];
} {
  const base = getSiteUrl();
  const pageUrl = absoluteUrl(input.path);
  const eventNode: Record<string, unknown> = {
    "@type": "Event",
    "@id": `${pageUrl}#event`,
    name: input.name,
    description: input.description,
    url: pageUrl,
    organizer: { "@id": `${base}/#institution` },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  };
  if (input.image) {
    eventNode.image = absoluteUrl(input.image);
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      eventNode,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.name,
        description: input.description,
        mainEntity: { "@id": `${pageUrl}#event` },
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#institution` },
        inLanguage: "en",
      },
    ],
  };
}

/** Faculty profile: Person + WebPage (server-render on `app/faculty/[slug]`). */
export function getFacultyProfileJsonLd(faculty: FacultyMember): {
  "@context": string;
  "@graph": Record<string, unknown>[];
} {
  const base = getSiteUrl();
  const url = absoluteUrl(`/faculty/${faculty.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: faculty.name,
        jobTitle: faculty.title,
        image: absoluteUrl(faculty.image),
        url,
        worksFor: { "@id": `${base}/#institution` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${faculty.name} | Faculty`,
        description: faculty.title,
        mainEntity: { "@id": `${url}#person` },
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#institution` },
        inLanguage: "en",
      },
    ],
  };
}
