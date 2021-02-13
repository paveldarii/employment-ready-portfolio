const db = require("../models");
const mailgun = require("mailgun-js");
module.exports = function (app) {
  app.post("/api/send_email", (req, res) => {
    const data = {
      from: process.env.mailgun_from_address,
      to: req.user.email,
      subject: req.body.subject,
      text: req.body.body,
    };

    //console.log(data);
    const DOMAIN = process.env.mailgun_domain;
    console.log(DOMAIN);
    const mg = mailgun({
      apiKey: process.env.mailgun_api_key,
      domain: DOMAIN,
    });

    mg.messages().send(data, function (error, body) {
      res.json(body);
    });
  });
};
