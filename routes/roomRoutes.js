const express = require("express");

const roomController = require("../controllers/roomController");

const router = express.Router();

// Homepage
router.get("/", (req, res) => {
  console.log("Homepage Request");
  res.status(200).end("This is the homepage");
});

// Last Reading
router.get("/api/v1/r:id/last", (req, res) => {
  res
    .status(200)
    .json({ parameter: req.params.id, humidity: "55", temperature: 24 });
});

// Last N-minutes readings
router.get("/api/v1/r:id/last/:num+:p", (req, res) => {
  let msg = "";
  switch (req.params.p) {
    case "m":
      msg = "Minutes";
      break;
    case "h":
      msg = "Hours";
      break;
    case "d":
      msg = "Days";
      break;
    default:
      msg = "BAD API URL REQUEST";
      break;
  }
  res.status(200).json({ message: msg });
});

module.exports = router;
