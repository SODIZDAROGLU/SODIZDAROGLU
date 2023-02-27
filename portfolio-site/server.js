require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();

app.use(express.json());
app.use(cors());



//if (process.env.NODE_ENV === "production") {
  app.use(express.static("portfolio-site/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "portfolio-site", "build", "index.html"))
  );
//}

const port = process.env.PORT || 3000;
app.listen(port, console.log(`server listing to port 3000 only`));


