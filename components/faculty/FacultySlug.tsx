import { notFound } from 'next/navigation';
import Image from 'next/image';
import { facultyMembers } from '@/lib/data/faculty';

export default async function FacultySlug({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const faculty = facultyMembers.find(f => f.slug === slug);

    if (!faculty) {
        notFound();
    }
    // console.log("faculty :", faculty);

    return (
        <section className="pb-20 bg-white">
            <div className="w-full max-w-full min-[700px]:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Image Left - Overlapping Hero */}
                    <div className="md:col-span-4 lg:col-span-4 w-full -mt-24 md:-mt-32 lg:-mt-44 relative z-20">
                        <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden shadow-md mb-6">
                            <Image
                                src={faculty.image}
                                alt={faculty.name}
                                fill
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content Right Top Links */}
                    <div className="md:col-span-8 lg:col-span-8 flex flex-col pt-6 md:pt-4 w-full">
                        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                            {faculty.bio && (
                                <a href="#biography" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Biography
                                </a>
                            )}
                            {/* {faculty.academicArea && (
                                <div className="text-lg text-booth-dark-gray border-b-2 border-booth-maroon pb-1">
                                    <span className="font-trade-gothic-light">Academic Areas</span>
                                </div>
                            )} */}
                            {faculty.accolades && (
                                <a href="#accolades-recognition" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Accolades
                                </a>
                            )}
                            {faculty.lifelongLearning && (
                                <a href="#commitment-to-lifelong-learning" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Commitment to Lifelong Learning
                                </a>
                            )}
                            {faculty.industryExperience && (
                                <a href="#industry-entrepreneurial-experience" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Industry & Entrepreneurial Experience
                                </a>
                            )}
                            {faculty.academicBackground && (
                                <a href="#academic-background" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Academic Background
                                </a>
                            )}
                            {faculty.vision && (
                                <a href="#vision" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Vision
                                </a>
                            )}
                            {(faculty.teachingAreasIntro || faculty.teachingAreas || faculty.teachingAreasOutro) && (
                                <a href="#teaching-areas" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    {faculty.teachingAreasTitle || "Teaching Areas"}
                                </a>
                            )}
                            {faculty.professionalExpertise && (
                                <a href="#professional-expertise" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Professional Expertise
                                </a>
                            )}
                            {faculty.certifications && (
                                <a href="#professional-certifications" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Professional Certifications
                                </a>
                            )}
                            {faculty.engagements && (
                                <a href="#engagement" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    {faculty.engagementTitle || "Engagement"}
                                </a>
                            )}
                            {faculty.advancedPrograms && (
                                <a href="#advanced-programs" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Advanced Programs
                                </a>
                            )}
                            {faculty.projects && (
                                <a href="#research-projects" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Research & Projects
                                </a>
                            )}
                            {faculty.publications && (
                                <a href="#publications" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    {faculty.publicationsTitle || "Research & Publications"}
                                </a>
                            )}
                            {faculty.conferences && (
                                <a href="#conference-presentations" className="text-lg text-booth-dark-gray font-trade-gothic-light border-b-2 border-booth-maroon pb-1 hover:text-booth-maroon transition-colors">
                                    Conference Presentations
                                </a>
                            )}
                        </div>

                        {/* {faculty.email && (
                            <div className="w-full border-b border-gray-300 pb-3 mb-8">
                                <a href={`mailto:${faculty.email}`} className="text-sm md:text-base text-gray-500 font-trade-gothic-bold uppercase tracking-wider hover:text-booth-maroon transition-colors flex items-center gap-2 w-max">
                                    EMAIL ADDRESS <span className="text-xl leading-none">↗</span>
                                </a>
                            </div>
                        )} */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-2">
                                    Academic Area
                                </h2>
                                <p className="text-base text-booth-light-gray font-trade-gothic-light">
                                    {faculty.academicArea}
                                </p>
                            </div>
                            {/* Email */}
                            {faculty.email && (
                                <div>
                                    <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-2">
                                        Email
                                    </h2>
                                    <a href={`mailto:${faculty.email}`} className="text-base text-booth-maroon font-trade-gothic-light hover:underline transition-colors">
                                        {faculty.email}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mt-8 md:mt-12">
                    <div className="col-span-1 md:col-span-12 space-y-12">


                        {/* Biography */}
                        {faculty.bio && (
                            <div id="biography" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Biography
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {faculty.bio.map((paragraph, index) => (
                                        <p 
                                            key={index} 
                                            className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: paragraph }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Teaching Areas */}
                        {(faculty.teachingAreasIntro || faculty.teachingAreas || faculty.teachingAreasOutro) && (
                            <div id="teaching-areas" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        {faculty.teachingAreasTitle || "Teaching Areas"}
                                    </h2>
                                </div>
                                {faculty.teachingAreasIntro && (
                                    <p className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
                                        {faculty.teachingAreasIntro}
                                    </p>
                                )}
                                {faculty.teachingAreas && (
                                    <ul className={`space-y-2 ${faculty.teachingAreasOutro ? 'mb-4' : ''}`}>
                                        {faculty.teachingAreas.map((area, index) => (
                                            <li key={index} className="flex items-start gap-2 ml-4">
                                                <span className="text-booth-maroon leading-relaxed shrink-0">•</span>
                                                <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                    {area}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {faculty.teachingAreasOutro && (
                                    <p className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
                                        {faculty.teachingAreasOutro}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Certifications */}
                        {faculty.certifications && (
                            <div id="professional-certifications" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Professional Certifications
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {faculty.certifications.map((cert, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                {cert}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Advanced Programs */}
                        {faculty.advancedPrograms && (
                            <div id="advanced-programs" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Advanced Programs
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {faculty.advancedPrograms.map((program, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                {program}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Professional Expertise */}
                        {faculty.professionalExpertise && (
                            <div id="professional-expertise" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Professional Expertise
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {faculty.professionalExpertise.map((expertise, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                {expertise}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Projects */}
                        {faculty.projects && (
                            <div id="research-projects" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Research & Projects
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {faculty.projects.map((project, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                {project}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Engagements */}
                        {faculty.engagements && (
                            <div id="engagement" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        {faculty.engagementTitle || "Engagement"}
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {faculty.engagements.map((engagement, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                {engagement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Publications */}
                        {(faculty.publicationsIntro || faculty.publications || faculty.publicationsOutro) && (
                            <div id="publications" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        {faculty.publicationsTitle || "Research & Publications"}
                                    </h2>
                                </div>
                                {faculty.publicationsIntro && (
                                    <p className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed mb-4">
                                        {faculty.publicationsIntro}
                                    </p>
                                )}
                                {faculty.publications && (
                                    <ul className={`space-y-4 ${faculty.publicationsOutro ? 'mb-4' : ''}`}>
                                        {faculty.publications.map((publication, index) => (
                                            <li key={index} className="flex items-start gap-2 ml-4">
                                                <span className="text-booth-maroon leading-relaxed shrink-0">•</span>
                                                <span 
                                                    className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: publication }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {faculty.publicationsOutro && (
                                    <p className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed mt-4">
                                        {faculty.publicationsOutro}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Conferences */}
                        {faculty.conferences && (
                            <div id="conference-presentations" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Conference Presentations
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {faculty.conferences.map((conference, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                {conference}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Accolades */}
                        {faculty.accolades && (
                            <div id="accolades-recognition" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Accolades & Recognition
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    {faculty.accolades.map((accoladeGroup, idx) => (
                                        <div key={idx}>
                                            <h3 className="font-trade-gothic-bold text-booth-dark-gray mb-2">
                                                {accoladeGroup.category}
                                            </h3>
                                            <ul className="space-y-2">
                                                {accoladeGroup.items.map((item, idxx) => (
                                                    <li key={idxx} className="flex items-start gap-2">
                                                        <span className="text-booth-maroon leading-relaxed">•</span>
                                                        <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Lifelong Learning */}
                        {faculty.lifelongLearning && (
                            <div id="commitment-to-lifelong-learning" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Commitment to Lifelong Learning
                                    </h2>
                                </div>
                                <p
                                    className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: faculty.lifelongLearning }}
                                />
                            </div>
                        )}

                        {/* Industry Experience */}
                        {faculty.industryExperience && (
                            <div id="industry-entrepreneurial-experience" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Industry & Entrepreneurial Experience
                                    </h2>
                                </div>
                                <div className="space-y-3">
                                    {faculty.industryExperience.map((exp, index) => (
                                        <p 
                                            key={index} 
                                            className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: exp }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Academic Background */}
                        {faculty.academicBackground && (
                            <div id="academic-background" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Academic Background
                                    </h2>
                                </div>
                                <ul className="space-y-2">
                                    {faculty.academicBackground.map((degree, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-booth-maroon leading-relaxed">•</span>
                                            <span 
                                                className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: degree }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Vision */}
                        {faculty.vision && (
                            <div id="vision" className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                    <h2 className="text-2xl md:text-3xl font-trade-gothic-bold text-booth-dark-gray tracking-wide">
                                        Vision
                                    </h2>
                                </div>
                                <p 
                                    className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed" 
                                    dangerouslySetInnerHTML={{ __html: faculty.vision }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    )
}
