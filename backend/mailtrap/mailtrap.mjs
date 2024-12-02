import { MailtrapClient } from "mailtrap";
 

export const mailtrapClient = new MailtrapClient({
  token: "525fc0e0afdf66c2938e0a029596904b",
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "anjunagar2000@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);