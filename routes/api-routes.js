const db = require("../models");
const mailgun = require("mailgun-js");
module.exports = function (app) {
  app.post("/api/send_email", (req, res) => {
    emailContent = `Name: ${req.body.name}
Email: ${req.body.email}
Text: ${req.body.text}`;
    const data = {
      from: "paveldarii@sandbox6ac30a2488d74e6d9daae7e2dc76777f.mailgun.org",
      to: "paveldarii@yahoo.com",
      subject: req.body.subject,
      text: emailContent,
    };
    console.log(data);
    const DOMAIN = "sandbox6ac30a2488d74e6d9daae7e2dc76777f.mailgun.org";
    console.log(DOMAIN);
    const mg = mailgun({
      apiKey: "eb7771d76b71a763ead0a621ee73c262-07bc7b05-baa1c8a5",
      domain: DOMAIN,
    });

    mg.messages().send(data, function (error, body) {
      res.json(body);
    });
  });
};
