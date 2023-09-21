// Purpose: Email server-side route
import nodemailer from "nodemailer";
import FWD_EMAIL_PW from '$static/private/FWD_EMAIL_PW.js'

export const actions = {
  sendEmail: (data) => {

    let data = new formData();

    // get the data from the form
    let email = data.get("email");
    let NPU = data.get("NPU");

    // send the email
    let transporter = nodemailer.createTransport({
      service: "smtp.forwardmail.net",
      port: 587,
      auth: {
        user: "npumail@atlantaga.gov",
        pass: FWD_EMAIL_PW
      },
      data: {
        from: "NPULocator@npuatlanta.org",
        to: email,
        replyTo: "npumail@atlantaga.gov",
        bcc: "npumail@atlantaga.gov",
        subject: "Your NPU Locator Results",
        text: "You're a member of NPU " + NPU + ".",
        html: ""
      }
    });
    transporter.sendMail(data, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
};
