import { mailtrapClient } from "./mailtrap.mjs";
import { sender } from "./mailtrap.mjs";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.mjs";
import { send_Welcome_Email } from "./emailTemplates.mjs";



export const sendVerificationEmail = async (email,verificationToken) => {
    // Send email to the provided email address with a verification link
    const recipients = [{email}];
    
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Verify your Email address !",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        })
        console.log("Email sent successfully: ", response);
    } catch (error) {
        console.error("Error sending email: ", error);
        throw new Error(error.message);
    }
};

export const sendWelcomeEmail = async (email,name) => {
const recipients = [{email}];

try {
    
    const response = await mailtrapClient.send({
        from: sender,
        to: recipients,
        subject: "Welcome to our website!",
        html: send_Welcome_Email.replace("{name}",name),
        category:"Welcome Email"
    });
    console.log("Welcome email sent successfully: ", response); 
} catch (error) {
    console.error("Error sending welcome email: ", error);
    throw new Error(error.message);
}
};

export const sendResetPasswordEmail = async(email,resetURL)=>{

    const recipients = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Reset Password Request",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
            category:"Reset Password Email"
        });
    } catch (error) {
        Console.error("Error sending reset password email: ", error);
        throw new Error(error.message);
    }
}

export const sendResetSuccessEmail = async(email)=>{
    const recipients = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Reset Password Email"
        });
    } catch (error) {
        console.error("Error sending reset success email: ", error);
        throw new Error(error.message);
    }
}