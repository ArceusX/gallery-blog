// Need to have run `npm install nodemailer`
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, subject, message, appName, address } = JSON.parse(event.body);

  // Create reusable transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,       // Your Gmail address
      pass: process.env.GMAIL_APP_PASS,   // Generate at https://myaccount.google.com/apppasswords
    },
  });

  // Define the email details
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: address, // Recipient
    subject: `Message for [${appName}]`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};