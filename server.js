const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Basic configuration (replace with your real values)
const PORT = process.env.PORT || 5000;
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.example.com';
const EMAIL_PORT = Number(process.env.EMAIL_PORT) || 587; // 465 for SSL, 587 for TLS
const EMAIL_USER = process.env.EMAIL_USER || 'your_email@example.com';
const EMAIL_PASS = process.env.EMAIL_PASS || 'your_email_password_or_app_password';
const EMAIL_FROM = process.env.EMAIL_FROM || EMAIL_USER;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'your_admin_email@example.com';

// Token expiration (e.g., 15 minutes)
const TOKEN_EXPIRATION_MS = 15 * 60 * 1000;

// In-memory store for pending messages
// NOTE: This is cleared when the server restarts. For production, use a database.
const pendingMessages = [];

const app = express();
app.use(express.json());

// Allow simple CORS for local frontend testing (optional but handy)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465, // true for 465, false for others
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Simple health check
app.get('/', (req, res) => {
  res.send('Email verification server is running.');
});

// 1) Contact form submission: store message + send verification email
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Generate a secure random token
  const token = crypto.randomBytes(32).toString('hex');

  const entry = {
    name,
    email,
    message,
    token,
    verified: false,
    createdAt: Date.now(),
  };

  pendingMessages.push(entry);

  const verifyUrl = `http://localhost:${PORT}/verify?token=${token}`;

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: email,
      subject: 'Verify your email to complete your message',
      text: `Hi ${name},\n\nThank you for reaching out through Ayush's portfolio.\n\nPlease click the link below to verify your email and complete your message submission:\n\n${verifyUrl}\n\nIf you did not initiate this, you can ignore this email.`,
    });

    return res.status(200).json({
      message: 'Verification email sent. Check your inbox to complete submission.',
    });
  } catch (err) {
    console.error('Error sending verification email:', err);
    // Remove the stored message if email sending fails
    const index = pendingMessages.findIndex((m) => m.token === token);
    if (index !== -1) pendingMessages.splice(index, 1);

    return res.status(500).json({ error: 'Failed to send verification email.' });
  }
});

// Helper: clean up expired tokens (optional but good hygiene)
function removeExpiredTokens() {
  const now = Date.now();
  for (let i = pendingMessages.length - 1; i >= 0; i -= 1) {
    if (now - pendingMessages[i].createdAt > TOKEN_EXPIRATION_MS) {
      pendingMessages.splice(i, 1);
    }
  }
}

// 3) Verification route
app.get('/verify', async (req, res) => {
  const { token } = req.query;

  if (!token || typeof token !== 'string') {
    return res.status(400).send('<h1>Invalid verification link</h1>');
  }

  removeExpiredTokens();

  const index = pendingMessages.findIndex((m) => m.token === token);
  if (index === -1) {
    return res
      .status(400)
      .send('<h1>Invalid or expired verification link.</h1><p>Please submit the form again.</p>');
  }

  const entry = pendingMessages[index];
  const age = Date.now() - entry.createdAt;
  if (age > TOKEN_EXPIRATION_MS) {
    pendingMessages.splice(index, 1);
    return res
      .status(400)
      .send('<h1>Verification link has expired.</h1><p>Please submit the form again.</p>');
  }

  entry.verified = true;

  // Process the message: log it and optionally email it to admin
  console.log('Verified contact message:', {
    name: entry.name,
    email: entry.email,
    message: entry.message,
  });

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: 'New verified contact form message',
      text: `From: ${entry.name} <${entry.email}>\n\n${entry.message}`,
    });
  } catch (err) {
    console.error('Error sending admin notification email:', err);
  }

  // Remove from pending store once processed
  pendingMessages.splice(index, 1);

  return res.send(
    '<h1>Thank you!</h1><p>Your email has been verified and your message has been submitted.</p>'
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
