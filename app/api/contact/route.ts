import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(request: Request) {
    try {
        await connectToDB();
        const body = await request.json();
        const { firstName, lastName, email, mobile, message } = body;

        // Backend Validation
        const alphabetRegex = /^[a-zA-Z\s]+$/;
        const phoneRegex = /^[0-9+()-\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !alphabetRegex.test(firstName)) {
            return NextResponse.json({ error: 'First Name must contain only alphabets.' }, { status: 400 });
        }
        if (!lastName || !alphabetRegex.test(lastName)) {
            return NextResponse.json({ error: 'Last Name must contain only alphabets.' }, { status: 400 });
        }
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: 'A valid Email Address is required.' }, { status: 400 });
        }
        if (!mobile || !phoneRegex.test(mobile)) {
             return NextResponse.json({ error: 'A valid Mobile Number is required.' }, { status: 400 });
        }

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            mobile,
            message
        });

        await newContact.save();

        console.log('Contact Request Saved to DB:', newContact);

        return NextResponse.json({ message: 'Request submitted successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error processing contact request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
