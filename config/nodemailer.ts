import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: password,
    },
});

export const mailOptions = {
    from: email,
    to: email,
};