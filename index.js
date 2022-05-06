const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { gameStartRouter } = require("./routes");

require("dotenv").config({
  path: "./config.env",
});

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/game", gameStartRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running at:  ${process.env.PORT}`);
});

module.exports = server;