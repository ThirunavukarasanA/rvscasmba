import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import EventSubscriber from '@/lib/models/EventSubscriber';

export async function POST(request: Request) {
    try {
        await connectToDB();
        const body = await request.json();
        const { firstName, lastName, email, agreedToComms } = body;

        // Backend Validation
        const alphabetRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!firstName || !alphabetRegex.test(firstName)) {
            return NextResponse.json({ error: 'First Name must contain only text.' }, { status: 400 });
        }
        if (!lastName || !alphabetRegex.test(lastName)) {
            return NextResponse.json({ error: 'Last Name must contain only text.' }, { status: 400 });
        }
        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: 'A valid Email Address is required.' }, { status: 400 });
        }
        if (!agreedToComms) {
             return NextResponse.json({ error: 'You must agree to receive communications.' }, { status: 400 });
        }

        const newSubscriber = new EventSubscriber({
            firstName,
            lastName,
            email,
            agreedToComms
        });

        await newSubscriber.save();

        console.log('Event Subscriber Saved to DB:', newSubscriber._id);

        return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error processing event subscription:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
