import { notFound } from 'next/navigation';
import Image from 'next/image';
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { facultyMembers } from '@/lib/data/faculty';
import { Metadata } from "next";
import HeroSection from '@/components/shared/HeroSection';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const slug = (await params).slug;
    const faculty = facultyMembers.find(f => f.slug === slug);
    if (!faculty) return { title: 'Faculty Not Found - RVS CAS MBA' };
    return {
        title: `${faculty.name} - Faculty at RVS CAS MBA`,
        description: faculty.title,
    };
}

export default async function FacultyProfilePage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const faculty = facultyMembers.find(f => f.slug === slug);

    if (!faculty) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <HeroSection
                pageName="Careers"
                title={faculty.name}
                description1={faculty.title}
                description2={faculty.academicArea}
                description3=""
                image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
            />
            {/* Faculty Profile Section */}
            <section className="py-16 md:py-24">
                <div className="w-full max-w-full min-[700px]:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12">

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
                        {/* Image Left */}
                        <div className="md:col-span-5 w-full md:sticky top-10">
                            <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-6">
                                <Image
                                    src={faculty.image}
                                    alt={faculty.name}
                                    fill
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Content Right */}
                        <div className="md:col-span-7 flex flex-col pt-4 md:pt-8 pb-12">
                            <div className="w-16 h-0.5 bg-booth-maroon mb-6"></div>
                            <h1 className="text-3xl md:text-5xl font-trade-gothic-bold text-booth-dark-gray mb-4">
                                {faculty.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-booth-light-gray font-trade-gothic-light mb-8">
                                {faculty.title}
                            </p>

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

                                {/* Biography */}
                                {faculty.bio && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Biography
                                        </h2>
                                        <div className="space-y-4">
                                            {faculty.bio.map((paragraph, index) => (
                                                <p key={index} className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Teaching Areas */}
                                {faculty.teachingAreas && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Teaching Areas
                                        </h2>
                                        <ul className="space-y-2">
                                            {faculty.teachingAreas.map((area, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-booth-maroon leading-relaxed">•</span>
                                                    <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                        {area}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Certifications */}
                                {faculty.certifications && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Professional Certifications
                                        </h2>
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
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Advanced Programs
                                        </h2>
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
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Professional Expertise
                                        </h2>
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
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Research & Projects
                                        </h2>
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
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Engagement
                                        </h2>
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
                                {faculty.publications && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Publications
                                        </h2>
                                        <ul className="space-y-4">
                                            {faculty.publications.map((publication, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-booth-maroon leading-relaxed">•</span>
                                                    <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                        {publication}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Conferences */}
                                {faculty.conferences && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Conference Presentations
                                        </h2>
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
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-6">
                                            Accolades & Recognition
                                        </h2>
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
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Commitment to Lifelong Learning
                                        </h2>
                                        <p className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                            {faculty.lifelongLearning}
                                        </p>
                                    </div>
                                )}

                                {/* Industry Experience */}
                                {faculty.industryExperience && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Industry & Entrepreneurial Experience
                                        </h2>
                                        <div className="space-y-3">
                                            {faculty.industryExperience.map((exp, index) => (
                                                <p key={index} className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                    {exp}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Academic Background */}
                                {faculty.academicBackground && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Academic Background
                                        </h2>
                                        <ul className="space-y-2">
                                            {faculty.academicBackground.map((degree, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-booth-maroon leading-relaxed">•</span>
                                                    <span className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                                        {degree}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Vision */}
                                {faculty.vision && (
                                    <div className="pt-8 border-t border-gray-200">
                                        <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
                                        <h2 className="text-lg font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
                                            Vision
                                        </h2>
                                        <p className="text-base text-booth-dark-gray font-trade-gothic-light leading-relaxed">
                                            {faculty.vision}
                                        </p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    )
}
