const express = require("express");
const app = express();
app.use("/test", (req, res) => {
  res.send("hello , hi");
});
app.use("/hello", (req, res) => {
  res.send("this is sahitha");
});
app.listen(3000, () => {
  console.log("hi");
});
