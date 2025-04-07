import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shabbirzain314@gmail.com',  // Replace with your email
        pass: 'eovk zlga qiul ttlx',      // Replace with your email password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      // Send email to the recipient (your email)
      const recipientEmailSent = await transporter.sendMail({
        from: 'shabbirzain314@gmail.com',
        to: 'appointmentstudio@gmail.com',  // Replace with the recipient email
        subject: `New Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      // Send confirmation email to the user
      const userConfirmationSent = await transporter.sendMail({
        from: 'shabbirzain314@gmail.com',
        to: email,
        subject: 'Your message has been received',
        text: `Thank you ${name}, we received your message.`,
      });

      return res.status(200).json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
      console.error('Email error:', error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
