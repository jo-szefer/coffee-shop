import express from "express";
import bodyParser from "body-parser";

import { sendMailController } from "./sendEmail";

const PORT = 5000;
const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/email", sendMailController);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
