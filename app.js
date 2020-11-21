const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const sendMail = require('./mail.js');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));




app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.get("/poetry", function(req, res) {
  res.render("poetry.ejs");
});

app.get("/articles", function(req, res) {
  res.render("articles.ejs");
});

app.get("/essays", function(req, res) {
  res.render("essays.ejs");
});

app.get("/contact", function(req, res) {
  res.render("contact.ejs");
});

app.post("/contact", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const data = {
    name,
    email,
    subject,
    message
  };

  console.log(data);

  sendMail(name, email, subject, message, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success! Email sent');
    }
  });

});

app.get("/404", function(req, res) {
  res.render("404.ejs");
});











app.listen(3000, function() {
  console.log("Server started on port 3000");
});
