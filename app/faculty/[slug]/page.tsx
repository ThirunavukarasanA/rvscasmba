import { notFound } from 'next/navigation';
import Image from 'next/image';
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { facultyMembers } from '@/lib/data/faculty';
import { Metadata } from "next";
import HeroSection from '@/components/shared/HeroSection';
import FacultyHeroSection from '@/components/shared/FacultyHeroSection';
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
    // console.log("faculty :", faculty);
    

    if (!faculty) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />
            <FacultyHeroSection
                pageName="Faculty"
                title={faculty.name}
                description1={faculty.title}
                description2={faculty.academicArea}
                params={params}
                faculty={faculty}
                description3=""
                image="/images/herosection/faculty-hero.webp"
                // image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                button1=""
                button2=""
                button1Link=""
                button2Link=""
                
            />
            {/* Faculty Profile Section */}
            <FacultySlug params={params} />
            <Footer />
        </main>
    )
}
