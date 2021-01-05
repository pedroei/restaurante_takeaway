const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//app.use(express.urlencoded({​​​​​ extended: true }​​​​​));

app.use("/api", require("./routes/jasmin"));

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});

module.exports = app;
