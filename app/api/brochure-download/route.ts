import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import BrochureDownload from "@/lib/models/BrochureDownload";
import { sendThankYouEmail, sendLeadEmail } from "@/lib/emailService";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const { name, email, mobile, courseName } = await req.json();
    if (!name || !email || !mobile || !courseName) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await BrochureDownload.create({
      name,
      email,
      mobile,
      courseName,
      createdAt: new Date(),
    });

    // Send thank you email to the user
    try {
      await sendThankYouEmail(name, email, courseName);
    } catch (emailError) {
      console.error('Failed to send thank you email:', emailError);
      // Don't fail the request if email fails
    }

    // Send lead notification to admin
    try {
      await sendLeadEmail(name, email, mobile, courseName);
    } catch (emailError) {
      console.error('Failed to send lead email:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({ message: "Saved" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
