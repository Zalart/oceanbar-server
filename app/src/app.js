const express = require("express");
const dishRouter = require("./resources/dish/dishRouter");
const app = express();
require("dotenv").config();

const port = 5000;

app.use(express.json());

app.use("/", (req, res, next) => {
  if (req.originalUrl === "/") {
    res.send("Service is running!");
    return;
  }
  next();
});

app.use("/api/menu", dishRouter);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}.`);
});
