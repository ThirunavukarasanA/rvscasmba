import { notFound } from 'next/navigation';
import Image from 'next/image';
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { facultyMembers } from '@/lib/data/faculty';
import { Metadata } from "next";
import FacultySlug from '@/components/faculty/FacultySlug';

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

            {/* Faculty Specific Hero */}
            <section className="relative w-full h-[350px] md:h-[450px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/herosection/faculty-hero.webp"
                        alt={faculty.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 w-full max-w-full min-[700px]:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] mx-auto px-4 min-[700px]:px-6 lg:px-8 xl:px-12 h-full flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 w-full md:mt-48">
                        <div className="hidden md:block md:col-span-4 lg:col-span-4"></div>
                        <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-center text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-trade-gothic-light text-white mb-2 leading-tight">
                                {faculty.name}
                            </h1>
                            <p className="text-lg md:text-xl text-white font-trade-gothic-bold opacity-90 max-w-xl">
                                {faculty.title}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Profile Section */}
            <FacultySlug params={params} />
            <Footer />
        </main>
    )
}
