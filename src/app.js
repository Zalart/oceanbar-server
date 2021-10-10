const express = require("express");
const menuRouter = require("./resources/menu/menuRouter");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/", (req, res, next) => {
  if (req.originalUrl === "/") {
    res.send("Service is running!");
    return;
  }
  next();
});

app.use("/api/menu", menuRouter);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}.`);
});
