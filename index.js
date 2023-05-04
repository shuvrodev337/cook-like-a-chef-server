const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());


app.get("/", (req, res) => {
    res.send("Hello World! Cooking Server is running!!");
  });






  app.listen(port, () => {
    console.log(`Cook like a chef app listening on port ${port}`);
  });