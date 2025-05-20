import { useEffect, useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseCard from "./components/ExpenseCard";
import TransactionForm from "./components/TransactionForm";
import ExpenseList from "./components/ExpenseList";
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
} from "./api/transactionAPI";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };
    getData();
  }, []);

  const handleAdd = async (txData) => {
    const newTx = await addTransaction(txData);
    setTransactions((prev) => [newTx, ...prev]);
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    setTransactions((prev) => prev.filter((tx) => tx._id !== id));
  };

  const filteredTransactions = Array.isArray(transactions)
    ? transactions.filter((tx) =>
      filter === "all" ? true : tx.type === filter
    )
    : [];



  return (
    <div className="max-w-xl mx-auto px-4 py-6 space-y-6">
      <Header />
      <Balance transactions={transactions} />

      <div className="flex justify-center gap-4">
        <button
          className={`px-4 py-1 rounded-md ${filter === "all"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-1 rounded-md ${filter === "income"
              ? "bg-green-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => setFilter("income")}
        >
          Income
        </button>
        <button
          className={`px-4 py-1 rounded-md ${filter === "expense"
              ? "bg-red-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
            }`}
          onClick={() => setFilter("expense")}
        >
          Expense
        </button>
      </div>

      <ExpenseCard transactions={transactions} />
      <TransactionForm onAdd={handleAdd} />

      {/* Animate transaction list with Framer Motion */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <AnimatePresence>
          <ExpenseList
            transactions={filteredTransactions}
            onDelete={handleDelete}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
