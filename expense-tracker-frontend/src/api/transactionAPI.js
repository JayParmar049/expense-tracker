// src/api/transactionAPI.js

export const fetchTransactions = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/transactions");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

export const addTransaction = async (transaction) => {
  try {
    const res = await fetch("http://localhost:5000/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/api/transactions/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting transaction:", error);
  }
};
