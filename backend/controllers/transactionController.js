const Transaction = require("../models/Transaction");

// GET all transactions
exports.getTransactions = async (req, res) => {
  const txns = await Transaction.find().sort({ createdAt: -1 });
  res.json(txns);
};

// POST a new transaction
exports.createTransaction = async (req, res) => {
  const txn = await Transaction.create(req.body);
  res.status(201).json(txn);
};

// DELETE a transaction
exports.deleteTransaction = async (req, res) => {
  const { id } = req.params;
  await Transaction.findByIdAndDelete(id);
  res.json({ message: "Transaction deleted" });
};
