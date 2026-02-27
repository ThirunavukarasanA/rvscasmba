import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Alumni from '@/lib/models/Alumni';

export async function POST(request: Request) {
    try {
        await connectToDB();
        const body = await request.json();
        const { fullName, graduationYear, currentPosition, organization, linkedinUrl, professionalHighlights } = body;

        // Backend Validation
        const alphabetRegex = /^[a-zA-Z\s]+$/;

        if (!fullName || !alphabetRegex.test(fullName)) {
            return NextResponse.json({ error: 'Full Name must contain only alphabets.' }, { status: 400 });
        }
        if (!graduationYear) {
            return NextResponse.json({ error: 'Graduation Year is required.' }, { status: 400 });
        }
        if (!currentPosition || !alphabetRegex.test(currentPosition)) {
            return NextResponse.json({ error: 'Current Position must contain only alphabets.' }, { status: 400 });
        }
        if (!organization || !alphabetRegex.test(organization)) {
            return NextResponse.json({ error: 'Organization must contain only alphabets.' }, { status: 400 });
        }
        if (!linkedinUrl || !linkedinUrl.startsWith('http')) {
            return NextResponse.json({ error: 'A valid LinkedIn URL is required.' }, { status: 400 });
        }
        if (!professionalHighlights || !alphabetRegex.test(professionalHighlights)) {
            return NextResponse.json({ error: 'Professional Highlights must contain only alphabets.' }, { status: 400 });
        }

        const newAlumniUpdate = new Alumni({
            fullName,
            graduationYear,
            currentPosition,
            organization,
            linkedinUrl,
            professionalHighlights
        });

        await newAlumniUpdate.save();

        console.log('Alumni Update Saved to DB:', newAlumniUpdate);

        return NextResponse.json({ message: 'Update submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error processing alumni update:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
