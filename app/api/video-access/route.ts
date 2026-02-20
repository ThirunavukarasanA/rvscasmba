import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";
import VideoAccess from "@/lib/models/VideoAccess";

export async function POST(request: NextRequest) {
  try {
    await connectToDB();

    const body = await request.json();
    const { name, email, phone, consent, topicId } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    let videoAccess = await VideoAccess.findOne({ email });

    if (videoAccess) {
      // Update existing user
      if (topicId && !videoAccess.watchedVideos.includes(topicId)) {
        videoAccess.watchedVideos.push(topicId);
      }
      // Update submittedAt to track last activity
      videoAccess.submittedAt = new Date();
      await videoAccess.save();
    } else {
      // Create new user record
      videoAccess = new VideoAccess({
        name,
        email,
        phone,
        consent,
        watchedVideos: topicId ? [topicId] : [],
        submittedAt: new Date(),
      });
      await videoAccess.save();
    }

    return NextResponse.json(
      {
        success: true,
        message: "Video access data saved successfully",
        data: videoAccess,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving video access data:", error);
    return NextResponse.json(
      { error: "Failed to save video access data" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDB();

    const email = request.nextUrl.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email parameter is required" },
        { status: 400 }
      );
    }

    const videoAccess = await VideoAccess.findOne({
      email: email.toLowerCase(),
    });

    if (!videoAccess) {
      return NextResponse.json(
        { error: "No data found for this email" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: videoAccess,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching video access data:", error);
    return NextResponse.json(
      { error: "Failed to fetch video access data" },
      { status: 500 }
    );
  }
}
