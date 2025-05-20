import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      text,
      amount: parseFloat(amount),
      type,
    };

    onAdd(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow mb-4"
    >
      <h3 className="text-lg font-semibold mb-2">Add New Transaction</h3>

      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded-md outline-none"
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded-md outline-none"
      />

      <div className="flex gap-4 mb-3">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === "income"}
            onChange={(e) => setType(e.target.value)}
          />
          Income
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === "expense"}
            onChange={(e) => setType(e.target.value)}
          />
          Expense
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;
