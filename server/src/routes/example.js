const express = require("express");
const router = express.Router();

router.get("/world", (req, res) => {
  res.send("Hello World");
});

router.get("/joao", (req, res) => {
  res.send("joao é gay")
})

module.exports = router;