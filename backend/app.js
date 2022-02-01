require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = 5000 || process.env.PORT;

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
});

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
});

app.post("/volunteer", (req, res) => {
    const { firstName, lastName, email, skills } = req.body;

    let mailOptions = {
        from: "codeocityorg@gmail.com",
        to: "codeocityorg@gmail.com",
        subject: "Job Application",
        // text: `Feedback: ${feedback}`,
        html: `<h1 style="font-size:20px;font-weight:600;">Name: ${firstName} ${lastName}</h1>
                <h1 style="font-size:20px;font-weight:600;">Email: ${email}</h1>
                <h1 style="font-size:20px;font-weight:600;">Skills: ${skills}</h1>
                <p style="font-size:20px;font-weight:300;">Time: ${new Date().toLocaleString()}</p>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
});

app.post("/feedback", (req, res) => {
    const { feedback } = req.body;

    let mailOptions = {
        from: "codeocityorg@gmail.com",
        to: "codeocityorg@gmail.com",
        subject: "User Feedback",
        // text: `Feedback: ${feedback}`,
        html: `<p style="font-size:20px;font-weight:300;">Feedback: ${feedback}</p><p style="font-size:20px;font-weight:300;">Time: ${new Date().toLocaleString()}</p>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
});

app.post("/contact-us", (req, res) => {
    const { name, email, message } = req.body;

    let mailOptions = {
        from: "codeocityorg@gmail.com",
        to: "codeocityorg@gmail.com",
        subject: "User Message",
        html: `<h1 style="font-size:20px;font-weight:600;">Name: ${name}</h1>
                <h1 style="font-size:20px;font-weight:600;">Email: ${email}</h1>
                <h1 style="font-size:20px;font-weight:600;">Message: ${message}</h1>
                <p style="font-size:20px;font-weight:300;">Time: ${new Date().toLocaleString()}</p>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server runnign on port ${PORT}`);
});
