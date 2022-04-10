const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(  express.static(path.join(__dirname, "dist")));


// mailer

async function main() {
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    secure: false,
    auth: {
      user: "ahmedsharabash2@hotmail.com",
      pass: "ahmed123456789$",
    },
  });

  let info = await transporter.sendMail({
    from: ` ${appdata.email} <ahmedsharabash2@hotmail.com>`, // sender address
    to: "ahmdmsty345@gmail.com", // list of receivers
    subject: appdata.name, // Subject line
    text: "",
    html: `<h1>${appdata.name}</h1><p>${appdata.message}</p>`, // plain text body
  });
}
let appdata = {};
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
console.log("server started");
app.post("/send", (req, res) => {
  appdata = req.body;
  main().then(res => console.log("done")).catch(console.error);
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(" app listening on port"+ port));
