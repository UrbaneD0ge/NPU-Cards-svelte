// Purpose: Email server-side route
import nodemailer from "nodemailer";

export const actions = {
  sendEmail: (data) => {

    let data = new formData();

    // get the data from the form
    let email = response.get("email");
    let NPU = response.get("NPU");

    // send the email
    let transporter = nodemailer.createTransport({
      service: "",
      auth: {
        user: "",
        pass: ""
      },
      data: {
        from: "NPULocator@npuatlanta.org",
        to: email,
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
