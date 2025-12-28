const express = require("express");
const app = express();
app.use(
  "/user",
  (req, res, next) => {
    console.log("first response");
    //res.send("first response");
    next();
  },
  (req, res, next) => {
    console.log("second response");
    //res.send("first response");
    next();
  },
  (req, res) => {
    console.log("third response");
    res.send("third response");
  }
);
app.listen(3000, () => {
  console.log("hi");
});
