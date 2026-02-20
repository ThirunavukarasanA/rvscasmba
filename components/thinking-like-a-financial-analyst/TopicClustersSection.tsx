"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import VideoAccessModal from "./VideoAccessModal";
import { clusters } from "@/lib/videoSeriesData";
import { getWatchedTopicIds } from "@/lib/videoSeriesDB";

const placeholderThumbnails = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=225&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=225&fit=crop",
];

export default function TopicClustersSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalTopicId, setModalTopicId] = useState<string | null>(null);
  const [watchedIds, setWatchedIds] = useState<Set<string>>(new Set());
  const clusterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const loadWatched = useCallback(async () => {
    const ids = await getWatchedTopicIds();
    setWatchedIds(new Set(ids));
  }, []);

  useEffect(() => {
    loadWatched();
  }, [loadWatched]);

  const toggleCluster = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleTopicClick = (topicId: string) => {
    setModalTopicId(topicId);
  };

  const handleModalClose = () => {
    setModalTopicId(null);
    loadWatched();
  };

  // Compute cluster status for each cluster
  const getClusterStatus = (clusterIndex: number) => {
    const topicIds = clusters[clusterIndex].topics.map((_, i) => `${clusterIndex}-${i}`);
    const watchedCount = topicIds.filter((id) => watchedIds.has(id)).length;
    const total = topicIds.length;
    if (watchedCount === total) return "done";
    if (watchedCount > 0) return "in_progress";
    return "pending";
  };

  // Find first cluster with pending videos (start here)
  const startHereClusterIndex = clusters.findIndex((_, clusterIndex) => {
    const status = getClusterStatus(clusterIndex);
    return status !== "done";
  });

  const goToStartHere = () => {
    if (startHereClusterIndex >= 0) {
      setOpenIndex(startHereClusterIndex);
      clusterRefs.current[startHereClusterIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const totalWatched = Array.from(watchedIds).length;
  const totalVideos = clusters.reduce((acc, c) => acc + c.topics.length, 0);
  const allDone = totalWatched === totalVideos;

  return (
    <section id="roadmap" className="py-12 md:py-20 bg-white scroll-mt-20">
      <div className="w-full max-w-full min-[700px]:max-w-[70%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
        <div className="mb-8 md:mb-12">
          <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-3 md:mb-4">
            Explore the Complete Roadmap
          </h2>
          <p className="text-booth-light-gray text-sm md:text-lg font-trade-gothic-light mb-6">
            Click on a cluster to expand and view all topics. Click any topic to watch the video.
          </p>

          {/* Start here banner */}
          <div className="flex flex-wrap items-center gap-4 p-4 bg-booth-bg-gray border-l-4 border-booth-maroon">
            {allDone ? (
              <span className="text-booth-dark-gray font-trade-gothic-light">
                All caught up! You&apos;ve watched all {totalVideos} videos. Revisit any topic below.
              </span>
            ) : (
              <>
                <button
                  onClick={goToStartHere}
                  className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
                >
                  Start here →
                </button>
                <span className="text-booth-dark-gray font-trade-gothic-light">
                  {startHereClusterIndex >= 0 && (
                    <>Cluster {startHereClusterIndex + 1}: {clusters[startHereClusterIndex].title}</>
                  )}
                </span>
                <span className="text-booth-light-gray font-trade-gothic-light text-sm">
                  ({totalWatched} of {totalVideos} watched)
                </span>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {clusters.map((cluster, clusterIndex) => {
            const isOpen = openIndex === clusterIndex;
            const status = getClusterStatus(clusterIndex);
            const topicIds = cluster.topics.map((_, i) => `${clusterIndex}-${i}`);
            const watchedCount = topicIds.filter((id) => watchedIds.has(id)).length;
            const total = topicIds.length;
            const isStartHere = startHereClusterIndex === clusterIndex;

            return (
              <div
                key={clusterIndex}
                ref={(el) => { clusterRefs.current[clusterIndex] = el; }}
                className={`border overflow-hidden transition-colors ${
                  isOpen ? "border-booth-maroon border-2" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleCluster(clusterIndex)}
                  className={`w-full text-left py-4 px-6 flex justify-between items-center group transition-colors ${
                    isOpen ? "bg-booth-bg-gray" : "hover:bg-booth-bg-gray"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-booth-maroon font-trade-gothic-bold text-sm">
                      Cluster {clusterIndex + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-trade-gothic-bold text-booth-dark-gray group-hover:text-booth-maroon">
                      {cluster.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {isStartHere && (
                        <span className="bg-booth-maroon text-white text-xs font-trade-gothic-bold px-2 py-1 rounded">
                          Start Here
                        </span>
                      )}
                      {isOpen && (
                        <span className="bg-booth-teal text-white text-xs font-trade-gothic-bold px-2 py-1 rounded">
                          Viewing
                        </span>
                      )}
                      {status === "done" && (
                        <span className="bg-booth-teal text-white text-xs font-trade-gothic-bold px-2 py-1 rounded">
                          Done
                        </span>
                      )}
                      {status === "in_progress" && (
                        <span className="bg-booth-light-gray text-white text-xs font-trade-gothic-bold px-2 py-1 rounded">
                          {watchedCount} of {total}
                        </span>
                      )}
                      {status === "pending" && !isStartHere && (
                        <span className="bg-gray-300 text-booth-dark-gray text-xs font-trade-gothic-light px-2 py-1 rounded">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-booth-dark-gray transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {cluster.topics.map((topic, topicIndex) => {
                          const topicId = `${clusterIndex}-${topicIndex}`;
                          const isWatched = watchedIds.has(topicId);
                          return (
                            <button
                              key={topicIndex}
                              onClick={() => handleTopicClick(topicId)}
                              className="text-left bg-white border border-gray-200 overflow-hidden hover:border-booth-maroon hover:shadow-md transition-all group relative"
                            >
                              {isWatched && (
                                <div className="absolute top-2 left-2 z-10 bg-booth-teal text-white text-xs font-trade-gothic-bold px-2 py-1 rounded">
                                  Watched
                                </div>
                              )}
                              <div className="relative aspect-video">
                                <Image
                                  src={placeholderThumbnails[topicIndex % placeholderThumbnails.length]}
                                  alt={topic}
                                  fill
                                  className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-booth-maroon ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="p-3">
                                <p className="text-sm font-trade-gothic-bold text-booth-dark-gray group-hover:text-booth-maroon line-clamp-2">
                                  {topic}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <VideoAccessModal
          isOpen={modalTopicId !== null}
          onClose={handleModalClose}
          topicId={modalTopicId ?? ""}
          onProgressUpdate={loadWatched}
        />
      </div>
    </section>
  );
}
