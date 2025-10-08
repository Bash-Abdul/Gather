import nodemailer from "nodemailer";

export async function createTestTransporter() {
  const testAccount = await nodemailer.createTestAccount(); // generates temp SMTP
  return nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

export async function sendEmail(to, subject, html, text) {
  const transporter = await createTestTransporter();
  const info = await transporter.sendMail({
    from: '"Gather Dev" <no-reply@gather.dev>',
    to,
    subject,
    html,
    text,
  });

  console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // open in browser
}
