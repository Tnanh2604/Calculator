const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  var operator = req.body.operator;
  if (operator == "+") {
    const result = parseInt(num1) + parseInt(num2);
    res.send(`The result of ${num1} and ${num2} is ${result}`);
  } else if (operator == "-") {
    const result = parseInt(num1) - parseInt(num2);
    res.send(`The result of ${num1} and ${num2} is ${result}`);
  } else if (operator == "*") {
    const result = parseInt(num1) * parseInt(num2);
    res.send(`The result of ${num1} and ${num2} is ${result}`);
  } else if (operator == "/") {
    if (num2 == 0) {
      res.send("Cannot divide by zero");
    } else {
      const result = parseInt(num1) / parseInt(num2);
      res.send(`The result of ${num1} and ${num2} is ${result}`);
    }
  } else {
    res.send("Invalid Operator");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
