"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock data for search
const mockData = [
  { title: "About CAS MBA", path: "/about", description: "Learn more about the RVS CAS MBA program." },
  { title: "Programs", path: "/programs", description: "Explore the different MBA programs offered." },
  { title: "Admissions", path: "/admissions", description: "Information on how to apply and admission criteria." },
  { title: "Faculty & Insights", path: "/insights", description: "Meet our esteemed faculty and read their insights." },
  { title: "Alumni", path: "/alumni", description: "Connect with our alumni network." },
  { title: "Events", path: "/events", description: "Upcoming events and past highlights." },
  { title: "Placements", path: "/placements", description: "Placement records and corporate relations." },
  { title: "Industry Connect", path: "/industry-connect", description: "Industry partnerships and connect programs." },
  { title: "Contact Us", path: "/contact", description: "Get in touch with the admissions team." },
];

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";
  const [results, setResults] = useState(mockData);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filtered = mockData.filter(
        item => 
          item.title.toLowerCase().includes(lowerQuery) || 
          item.description.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!query) {
    return (
      <div className="text-gray-600">
        Please enter a search term in the header to find what you are looking for.
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-600 mb-6 font-trade-gothic-light">
        Showing results for: <span className="font-trade-gothic-bold text-black">&quot;{query}&quot;</span>
      </p>

      {results.length > 0 ? (
        <div className="grid gap-6">
          {results.map((result, index) => (
            <Link 
              key={index} 
              href={result.path}
              className="block p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-booth-maroon transition-all duration-300"
            >
              <h2 className="text-xl font-trade-gothic-bold text-booth-maroon mb-2">{result.title}</h2>
              <p className="text-gray-600 font-trade-gothic-light">{result.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
          <p className="text-gray-600 font-trade-gothic-light text-lg">No results found for &quot;{query}&quot;.</p>
          <p className="text-gray-500 mt-2 text-sm">Try checking your spelling or using different keywords.</p>
        </div>
      )}
    </div>
  );
}
