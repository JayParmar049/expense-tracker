function ExpenseList({ transactions, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-3">Transaction History</h3>
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions yet</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li
              key={tx._id}
              className={`flex justify-between items-center p-2 rounded-md border-l-4 ${
                tx.type === "income"
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
              }`}
            >
              <span>{tx.text}</span>
              <div className="flex items-center gap-3">
                <span
                  className={`font-medium ${
                    tx.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ₹{tx.amount}
                </span>
                <button
                  onClick={() => onDelete(tx._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
