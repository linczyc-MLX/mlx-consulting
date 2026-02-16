import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    const errors: string[] = [];

    if (!body.name || body.name.trim().length === 0) {
      errors.push("Name is required.");
    }

    if (!body.email || body.email.trim().length === 0) {
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
      errors.push("Please provide a valid email address.");
    }

    if (!body.message || body.message.trim().length === 0) {
      errors.push("Message is required.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Log the submission (replace with nodemailer or external service later)
    console.log("--- Contact Form Submission ---");
    console.log("Name:", body.name.trim());
    console.log("Phone:", body.phone?.trim() || "(not provided)");
    console.log("Email:", body.email.trim());
    console.log("Message:", body.message.trim());
    console.log("Timestamp:", new Date().toISOString());
    console.log("--- End Submission ---");

    // TODO: Send email via nodemailer, SendGrid, Resend, etc.
    // Target: info@mlxconsulting.com

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll get back to you shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        errors: ["Something went wrong. Please try again later."],
      },
      { status: 500 }
    );
  }
}
