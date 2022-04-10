const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "dist")));

const nodemailer = require("nodemailer");
async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ahmdmsty222@gmail.com",
      pass: "ahmed123456789$",
    },
  });

  let info = await transporter.sendMail({
    from: ` ${appdata.email} <ahmdmsty222@gmail.com>`, // sender address
    to: "ahmdmsty139@gmail.com", // list of receivers
    subject: appdata.name, // Subject line
    text: "",
    html: `<h1>${appdata.name}</h1><p>${appdata.message}</p>`, // plain text body
  });
}
let appdata = {};
app.post("/send", (req, res) => {
  appdata = req.body;
  main().catch(console.error);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Example app listening on port 3000!"));
