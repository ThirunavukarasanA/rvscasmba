// Placeholder YouTube video ID for all topics (replace with actual IDs when available)
const PLACEHOLDER_VIDEO_ID = "95VIIL_tao8";

export const clusters = [
  {
    title: "Power, Control & Capital Structure",
    topics: [
      "Voting Rights vs Economic Rights",
      "Why People Invest Without Control",
      "Preference Shares: Who Really Benefits?",
      "Founder Dilution: Losing Control to Win Big",
      "Why Promoters Still Control with Minority Ownership",
      "Debt vs Equity: Power Trade-offs",
      "Why Lenders Have More Power Than Shareholders",
      "Why Banks Care About Assets, Not Ideas",
    ],
  },
  {
    title: "Return on Capital: The Analyst's Core Lens",
    topics: [
      "What Return on Capital Actually Means",
      "Why Two Companies With Same ROIC Are Not Equal",
      "How Old Companies Look Bad on Paper",
      "Why Historical Cost Distorts Performance",
      "Why Asset-Light Companies Look Superhuman",
      "When ROIC Completely Breaks Down",
      "Why 1000% ROIC Can Be Meaningless",
      "Spread vs Profit: The Real Value Test",
    ],
  },
  {
    title: "Accounting vs Reality",
    topics: [
      "Why Accounting Numbers Are Not Truth",
      "What Balance Sheets Hide",
      "Why the Best Assets Don't Appear Anywhere",
      "Why Profitable Companies Go Bankrupt",
      "Profit vs Cash Flow: Who Survives?",
      "Why Ratios Can Be Dangerous",
      "Cookie Jar Accounting Explained",
      "How Companies Smooth Profits Legally",
    ],
  },
  {
    title: "Intangible Assets & Modern Businesses",
    topics: [
      "Why Knowledge Is Valuable but Not an Asset",
      "Why Brands Are Worth Billions but Shown as Zero",
      "Ecosystems as Invisible Assets",
      "Why Talent Never Appears on Balance Sheets",
      "Why Education Is an Unfundable Asset",
      "Why Banks Hate Intangibles",
      "Why Accounting Is Conservative by Design",
    ],
  },
  {
    title: "Digital Economy & Metric Failure",
    topics: [
      "Why Traditional ROIC Fails in Tech Companies",
      "Negative Capital Employed Explained",
      "Other People's Money (OPM) Businesses",
      "Why Amazon Looks Bad but Is Brilliant",
      "Segment Economics: Where Money Is Really Made",
      "Why Expense-Based Investment Distorts Metrics",
    ],
  },
  {
    title: "Industry & Business Model Comparisons",
    topics: [
      "Inventory vs PPE vs Intangibles: Business DNA",
      "Tiffany vs FeverTree vs Publicis",
      "Why Some Businesses Need Heavy Assets",
      "Why Some Businesses Outsource Everything",
      "Why Football Clubs Lose Money but Gain Value",
      "Players as Assets: Rare Accounting Exceptions",
    ],
  },
  {
    title: "R&D, Capitalization & Manipulation",
    topics: [
      "Capitalize or Expense? Why It Matters",
      "Research vs Development (IFRS vs US GAAP)",
      "How Capitalization Boosts Short-Term Profits",
      "The Hidden Cost of Amortization",
      "Why US GAAP Is Stricter Than IFRS",
      "Why Regulators Don't Trust Managers",
    ],
  },
  {
    title: "Impairment & Value Destruction",
    topics: [
      "What Is Impairment?",
      "Why Impairment Hits Suddenly",
      "How Good Years Hide Future Disasters",
      "Why Investors Get Misled for Years",
      "When Accounting Finally Tells the Truth",
    ],
  },
  {
    title: "M&A, Goodwill & Stories",
    topics: [
      "Why Companies Overpay in Acquisitions",
      "The Real Meaning of Goodwill",
      "AOL–Time Warner: Biggest M&A Failure Ever",
      "How Stories Drive Valuations",
      "Bid Premiums Explained Simply",
      "Why Acquisitions Destroy More Value Than They Create",
    ],
  },
  {
    title: "Career Signaling & Analyst Mindset",
    topics: [
      "What Financial Analysts Actually Do",
      "Why Analysts Don't Trust First Numbers",
      "Judgment vs Calculation in Finance",
      "Why Finance Is About Saying No",
      "How Analysts Think Differently From Accountants",
      "Why Elite Finance Is Case-Driven, Not Formula-Driven",
    ],
  },
];

export type TopicItem = {
  id: string;
  clusterIndex: number;
  topicIndex: number;
  title: string;
  videoId: string;
};

export const allTopics: TopicItem[] = clusters.flatMap(
  (cluster, clusterIndex) =>
    cluster.topics.map((title, topicIndex) => ({
      id: `${clusterIndex}-${topicIndex}`,
      clusterIndex,
      topicIndex,
      title,
      videoId: PLACEHOLDER_VIDEO_ID,
    })),
);

export function getTopicById(id: string): TopicItem | undefined {
  return allTopics.find((t) => t.id === id);
}

export function getNextTopicId(currentId: string): string | null {
  const idx = allTopics.findIndex((t) => t.id === currentId);
  if (idx < 0 || idx >= allTopics.length - 1) return null;
  return allTopics[idx + 1].id;
}

export function getPrevTopicId(currentId: string): string | null {
  const idx = allTopics.findIndex((t) => t.id === currentId);
  if (idx <= 0) return null;
  return allTopics[idx - 1].id;
}
