const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());

const chefs = require("./data/chefs.json")

app.get("/", (req, res) => {
    res.send("Hello World! Cooking Server is running!!");
  });
app.get("/chefs", (req, res) => {
    res.send(chefs);
  });
app.get("/chefs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef=> parseInt(chef.id) === id)
    res.send(selectedChef);
  });






  app.listen(port, () => {
    console.log(`Cook like a app listening on port ${port}`);
  });