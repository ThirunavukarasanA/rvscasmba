import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import RequestInfo from '@/lib/models/RequestInfo';

export async function POST(request: Request) {
    try {
        await connectToDB();
        const body = await request.json();
        const { firstName, lastName, email, mobile, program, qualification, city, source, message } = body;

        // Backend Validation
        const alphabetRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[6-9]\d{9}$/;

        if (!firstName || !alphabetRegex.test(firstName)) {
            return NextResponse.json({ error: 'First Name must contain only alphabets.' }, { status: 400 });
        }
        if (!lastName || !alphabetRegex.test(lastName)) {
            return NextResponse.json({ error: 'Last Name must contain only alphabets.' }, { status: 400 });
        }
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: 'A valid Email Address is required.' }, { status: 400 });
        }
        if (!mobile || !mobileRegex.test(mobile)) {
             return NextResponse.json({ error: 'A valid 10-digit Indian Mobile Number is required.' }, { status: 400 });
        }
        if (!program || program.trim() === '') {
            return NextResponse.json({ error: 'Program of Interest is required.' }, { status: 400 });
        }
        if (!qualification || qualification.trim() === '') {
            return NextResponse.json({ error: 'Current Qualification is required.' }, { status: 400 });
        }
        if (!city || city.trim() === '') {
            return NextResponse.json({ error: 'City / State is required.' }, { status: 400 });
        }

        const newRequest = new RequestInfo({
            firstName,
            lastName,
            email,
            mobile,
            program,
            qualification,
            city,
            source,
            message
        });

        await newRequest.save();

        console.log('Information Request Saved to DB:', newRequest._id);

        return NextResponse.json({ message: 'Request submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error processing information request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
