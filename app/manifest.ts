import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RVS CAS MBA — RVS College of Arts & Science",
    short_name: "RVS CAS MBA",
    description:
      "Management education combining business fundamentals with technology, analytics, and real-world decision-making.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#800020",
    lang: "en",
    icons: [
      {
        src: "/images/header/RVSCAS_Logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
