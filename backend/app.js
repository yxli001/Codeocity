require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const PORT = process.env.PORT || 5000;

// Middleware
// Secures HTTP headers
app.use(helmet());
// Stops XSS attacks
app.use(xss());
app.use(express.urlencoded({ extended: false }));

//Stops oversending to routes
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, //15 min
        max: 100,
    })
);

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

app.use(express.json());
app.use(express.text());

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
    const { firstName, lastName, email, skills } = JSON.parse(req.body);

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
            return res.send("Error");
        } else {
            console.log("Email sent successfully");
            return res.send("Email sent successfully");
        }
    });
});

app.post("/feedback", (req, res) => {
    const { feedback } = JSON.parse(req.body);

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
            return res.send("Error");
        } else {
            console.log("Email sent successfully");
            return res.send("Email sent successfully");
        }
    });
});

app.post("/contact-us", (req, res) => {
    const { name, email, message } = JSON.parse(req.body);

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
            return res.send("Error");
        } else {
            console.log("Email sent successfully");
            return res.send("Email sent successfully");
        }
    });
});

app.post("/enroll", (req, res) => {
    const { name, email, course, time } = JSON.parse(req.body);

    let mailOptions = {
        from: "codeocityorg@gmail.com",
        to: "codeocityorg@gmail.com",
        subject: "Enroll Request",
        html: `<h1 style="font-size:20px;font-weight:600;">Name: ${name}</h1>
                <h1 style="font-size:20px;font-weight:600;">Email: ${email}</h1>
                <h1 style="font-size:20px;font-weight:600;">Course: ${course}</h1>
                <p style="font-size:20px;font-weight:300;">Time Slot: ${time}</p>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
            return res.send("Error");
        } else {
            console.log("Email sent successfully");
            return res.send("Email sent successfully");
        }
    });
});

app.get("*", (req, res) => {
    res.send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server runnign on port ${PORT}`);
});
