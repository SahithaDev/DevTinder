const express = require("express");
const app = express();
app.get("/user/:userID/:name", (req, res) => {
  console.log(req.params);
  res.send("hi");
});
app.listen(3000, () => {
  console.log("hi");
});
