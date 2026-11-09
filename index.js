const express = require("express");

const app = express();
app.set("view engine", "pug");

app.use(express.static("./target"));

app.get("/cream", (req, res) => {
    res.send("Hi, cream! ✋🏻")
})

app.get("/mypage/:message", (req, res) => {
  const message = req.params.message;

  res.render("mypage", { message });
});

app.get("/cream-deploy", (req, res) => {
    res.send("Deploy")
})

app.listen(1111, () => {
      console.log("starting server at port 1111");
})