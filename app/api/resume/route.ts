import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Resume from '@/lib/models/Resume';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    try {
        await connectToDB();
        
        // Use FormData to parse potentially including the file
        const formData = await request.formData();
        
        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const specialization = formData.get('specialization') as string;
        const positionType = formData.get('positionType') as string;
        const experience = Number(formData.get('experience'));
        const qualification = formData.get('qualification') as string;
        const linkedin = formData.get('linkedin') as string;
        const statement = formData.get('statement') as string;
        
        const resumeFile = formData.get('resume') as File | null;
        let resumeUrl = 'Unknown';

        // Backend Validation
        const alphabetRegex = /^[a-zA-Z\s]+$/;
        const qualificationRegex = /^[a-zA-Z\s\.,-]+$/;
        const phoneRegex = /^[0-9+()-\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName || !alphabetRegex.test(fullName)) {
            return NextResponse.json({ error: 'Full Name must contain only alphabets.' }, { status: 400 });
        }
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: 'A valid Email Address is required.' }, { status: 400 });
        }
        if (!phone || !phoneRegex.test(phone)) {
             return NextResponse.json({ error: 'A valid Phone Number is required.' }, { status: 400 });
        }
        if (!qualification || !qualificationRegex.test(qualification)) {
            return NextResponse.json({ error: 'Highest Qualification must contain only alphabets and typical punctuation.' }, { status: 400 });
        }

        // Process and Save File
        if (resumeFile) {
            // Convert to Buffer
            const arrayBuffer = await resumeFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            // Construct Filename and Upload Directory
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
            const uniqueFilename = `${Date.now()}_${resumeFile.name.replace(/[^a-zA-Z0-9.\-_]/g, '')}`;
            const filePath = path.join(uploadDir, uniqueFilename);

            // Ensure directory exists, then write file
            await fs.mkdir(uploadDir, { recursive: true });
            await fs.writeFile(filePath, buffer);
            
            // Generate public-facing URL
            resumeUrl = `/uploads/resumes/${uniqueFilename}`;
        }

        const newResumeSubmission = new Resume({
            fullName,
            email,
            phone,
            specialization,
            positionType,
            experience,
            qualification,
            linkedin,
            statement,
            resumeFileName: resumeUrl // Store generated URL path instead
        });

        await newResumeSubmission.save();

        console.log('Resume Submission Saved to DB with URL:', newResumeSubmission.resumeFileName);

        return NextResponse.json({ message: 'Request submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error processing resume submission:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
