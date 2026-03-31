import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  cc?: string;
}

export const sendEmail = async (emailData: EmailData): Promise<void> => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: emailData.to,
      cc: emailData.cc,
      subject: emailData.subject,
      html: emailData.html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", emailData.to);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export const sendThankYouEmail = async (
  name: string,
  email: string,
  courseName: string,
): Promise<void> => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Downloading Our Brochure</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #800020; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; background-color: #f8f9fa; }
        .footer { background-color: #e2e8f0; padding: 20px; text-align: center; font-size: 12px; }
        .button { display: inline-block; padding: 10px 20px; background-color: #1a365d; color: white; text-decoration: none; border-radius: 5px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Your Interest!</h1>
        </div>
        <div class="content">
          <h2>Dear ${name},</h2>
          <p>Thank you for downloading our brochure for <strong>${courseName}</strong>. We're excited that you're interested in our MBA program!</p>
          <p>Our brochure contains detailed information about the curriculum, faculty, career opportunities, and everything you need to know about joining RVSCAS MBA.</p>
          <p>If you have any questions or need further assistance, please don't hesitate to contact us.</p>
          <p>Best regards,<br>RVSCAS MBA Admissions Team</p>
        </div>
        <div class="footer">
          <p>RVSCAS MBA Program<br>
          Email: admissions@rvscasmba.edu<br>
          Phone: +91-XXXXXXXXXX</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: email,
    subject: `Thank You for Downloading ${courseName} Brochure`,
    html,
  });
};

export const sendLeadEmail = async (
  name: string,
  email: string,
  mobile: string,
  courseName: string,
): Promise<void> => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Brochure Download Lead</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px 20px; background-color: #fef2f2; }
        .lead-info { background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0; }
        .lead-info h3 { margin-top: 0; color: #dc2626; }
        .footer { background-color: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎯 New Brochure Download Lead</h1>
        </div>
        <div class="content">
          <p>A new student has downloaded a brochure. Here are the details:</p>
          <div class="lead-info">
            <h3>Lead Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Course:</strong> ${courseName}</p>
            <p><strong>Download Time:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>
          <p>Please follow up with this lead as soon as possible to provide additional information and assistance.</p>
        </div>
        <div class="footer">
          <p>RVSCAS MBA Lead Management System</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: "thirunavuakarasan@rvsgroup.com",
    cc: "thirugopi733@gmail.com",
    subject: `New Brochure Download Lead - ${courseName}`,
    html,
  });
};
