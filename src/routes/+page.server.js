import nodemailer from "nodemailer";
import { FWD_EMAIL_PW } from '$env/static/private';


export const actions = {
  sendEmail: async ({ request }) => {
    // create a new instance of the form data
    const data = await request.formData();

    // get the data from the form
    let NPU = data.get("NPU");
    let email = data.get("email");

    console.log("Email: ", email, "NPU: ", NPU);


    // send the email
    let transporter = nodemailer.createTransport({
      host: "smtp.forwardmail.com",
      port: 587,
      secure: true,
      debug: true,
      auth: {
        user: "kdunlap@atlantaga.gov",
        pass: FWD_EMAIL_PW
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let info = await transporter.sendMail({
      data: {
        from: "NPULocator@npuatlanta.org",
        to: email,
        replyTo: "npumail@atlantaga.gov",
        bcc: "npumail@atlantaga.gov",
        subject: "Your NPU Locator Results",
        text: "You're a member of NPU " + NPU + ".",
        html: ""
      }
    }
    )
      .then(info => {
        console.log("Message sent: %s", info.messageId);
      })
      .catch(err => {
        console.log(err);
      })
  },

  return: {
    status: 200,
    body: {
      message: "Email sent successfully!"
    }
  }
};
