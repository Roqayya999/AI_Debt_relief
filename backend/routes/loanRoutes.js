const express = require("express");
const router = express.Router();

const {
  saveLoan,
  getLoan,
} = require("../controllers/loanController");

router.post("/save", saveLoan);
router.get("/:userId", getLoan);

module.exports = router;