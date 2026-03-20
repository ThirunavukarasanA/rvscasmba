import { Suspense } from "react";
import SearchResults from "./SearchResults";

export const metadata = {
  title: "Search Results | RVS CAS MBA",
  description: "Search results for RVS CAS MBA",
};

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-trade-gothic-bold text-booth-maroon mb-8">Search Results</h1>
        <Suspense fallback={<div className="text-gray-600">Loading search results...</div>}>
          <SearchResults />
        </Suspense>
      </div>
    </div>
  );
}
