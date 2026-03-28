"use client";
import { useEffect, useState } from "react";

type RecruiterVideo = {
    id: string;
    title: string;
    subtitle: string;
};

const videos: RecruiterVideo[] = [
    {
        id: "SvSx0DkJaQE",
        title: "Recruiter Perspectives",
        subtitle: "Watch how recruiters evaluate readiness from MBA graduates.",
    },
    {
        id: "wC8cs06XqYQ",
        title: "Recruiter Perspectives",
        subtitle: "Employer perspective on hiring, skills, and campus engagement.",
    },
    {
        id: "MUajv453p_g",
        title: "Recruiter Perspectives",
        subtitle: "More from recruiters on what they look for in MBA talent.",
    },
];

export default function RecruiterPerspectives() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState<RecruiterVideo | null>(null);

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

    const openVideo = (video: RecruiterVideo) => {
        setActiveVideo(video);
        setIsModalOpen(true);
    };

    return (
        <section className="py-8 md:py-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="mb-8 md:mb-12">
                    <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                    <h2 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-6">
                        Recruiter Perspectives
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray">Why Employers Engage with RVS CAS MBA</h3>
                </div>
                <div className='space-y-6 md:space-y-10'>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “RVS students demonstrate structured thinking and strong analytical fundamentals. They are prepared to contribute from day one.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed"> — Hiring Manager, Analytics Firm</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “Candidates show practical exposure to tools and real-world problem solving. Their readiness reflects deliberate academic preparation.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— HR Lead, Manufacturing Company</p>
                    </div>
                    <div>
                        <p className="text-lg md:text-2xl text-booth-dark-gray font-trade-gothic-light italic leading-relaxed mb-2">
                            “The dual specialization structure gives students broader perspective. They understand cross-functional impact.”
                        </p>
                        <p className="text-base md:text-lg text-booth-dark-gray font-trade-gothic-light leading-relaxed">— Talent Acquisition Manager, Financial Services</p>
                    </div>
                </div>

                <div className="mt-10 md:mt-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {videos.map((video) => (
                            <button
                                key={video.id}
                                type="button"
                                onClick={() => openVideo(video)}
                                className="w-full text-left bg-white border border-gray-200 overflow-hidden hover:border-booth-maroon hover:shadow-md transition-all group"
                                aria-label={`Open video: ${video.title}`}
                            >
                                <div className="relative aspect-[16/10] bg-black">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt={`${video.title} thumbnail`}
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
            </div>
            {isModalOpen && activeVideo && (
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
                                {activeVideo.title}
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
                                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                                title={activeVideo.title}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
