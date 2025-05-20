const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction.js"); // Make sure the model exists

// POST /api/transactions
router.post("/", async (req, res) => {
  try {
    const { text, amount } = req.body;

    if (!text || !amount) {
      return res.status(400).json({ error: "Please provide both text and amount" });
    }

    const newTransaction = new Transaction({ text, amount });
    const saved = await newTransaction.save();

    res.status(201).json(saved);
  } catch (err) {
    console.error("POST error:", err.message);
    res.status(500).json({ error: "Server error while saving transaction" });
  }
});

module.exports = router;
