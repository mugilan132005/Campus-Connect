const express = require("express");
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const emotionRoute = require("./routes/emotion");

const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.static('public'));


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Emotion route
app.use("/api/emotion", emotionRoute);

// Email sending route
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'campusconnect1318@gmail.com',
      pass: 'unqdzyupzdryfsqb' // your Gmail App Password
    }
  });

  const mailOptions = {
    from: 'campusconnect1318@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});