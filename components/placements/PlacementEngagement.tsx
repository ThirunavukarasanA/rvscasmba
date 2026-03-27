"use client";
import { useEffect, useState } from "react";

export default function PlacementEngagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState<{
        id: string;
        title: string;
        subtitle: string;
    } | null>(null);

    const videos = [
        {
            id: "nnr0Q6RxI0k",
            title: "Recruiter Perspectives",
            subtitle: "Additional industry perspective on hiring and role readiness.",
        },
        {
            id: "V33nBZ8FDiQ",
            title: "Student Experiences",
            subtitle: "Hear directly from students on their journey.",
        },
    ];

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    return (
        <section className="py-8 md:py-20 bg-booth-bg-gray">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-6 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                        Placement Engagement – During Recruitment
                    </h2>
                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">As students approach placement, the MBA Office facilitates engagement between students and employers through:</p>
                </div>

                <div className="space-y-6">
                    <ul className="space-y-3 text-booth-dark-gray font-trade-gothic-light">
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>On-campus recruitment drives</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Industry guest sessions and networking events</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Sector-specific role briefings</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Interview shortlisting and coordination</b></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-booth-maroon mt-1">•</span>
                            <span><b>Feedback-driven coaching during selection processes</b></span>
                        </li>
                    </ul>

                    <p className="text-lg md:text-xl text-booth-dark-gray font-trade-gothic-light">
                        Each interaction is framed as an opportunity for learning, not simply a transaction.
                    </p>
                    <div className="pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
                            {videos.map((video) => (
                                <button
                                    key={video.id}
                                    type="button"
                                    onClick={() => {
                                        setActiveVideo(video);
                                        setIsModalOpen(true);
                                    }}
                                    className="w-full text-left bg-white border border-gray-200 overflow-hidden hover:border-booth-maroon hover:shadow-md transition-all group"
                                    aria-label={`Open ${video.title} video`}
                                >
                                    <div className="relative aspect-[16/10] bg-black">
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                            alt={`${video.title} video thumbnail`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                                            <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow">
                                                <svg className="w-5 h-5 text-booth-maroon ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-sm md:text-base font-trade-gothic-bold text-booth-dark-gray group-hover:text-booth-maroon">
                                            {video.title}
                                        </p>
                                        <p className="text-xs md:text-sm text-booth-dark-gray font-trade-gothic-light mt-1">
                                            {video.subtitle}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* <Link
            href="/request-information"
            className="inline-flex items-center gap-2 text-booth-maroon font-trade-gothic-bold hover:underline"
          >
            Talk to an Academic Advisor
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link> */}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <button
                        type="button"
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close video modal"
                    />
                    <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-booth-bg-gray">
                            <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray truncate pr-4">
                                {activeVideo?.title ?? "Placement Engagement"}
                            </h2>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-200 transition shrink-0"
                                aria-label="Close"
                            >
                                <svg className="w-5 h-5 text-booth-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative aspect-video bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo?.id ?? ""}?autoplay=1`}
                                title={activeVideo?.title ?? "Placement Engagement"}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
