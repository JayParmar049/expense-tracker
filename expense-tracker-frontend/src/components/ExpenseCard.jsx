function ExpenseCard({ transactions }) {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0)
    .toFixed(2);

  return (
    <div className="flex justify-between gap-4 mb-4">
      <div className="flex-1 bg-green-100 text-green-800 p-4 rounded-xl text-center">
        <h3 className="font-medium">Income</h3>
        <p className="text-lg font-bold">+₹{income}</p>
      </div>
      <div className="flex-1 bg-red-100 text-red-800 p-4 rounded-xl text-center">
        <h3 className="font-medium">Expense</h3>
        <p className="text-lg font-bold">-₹{expense}</p>
      </div>
    </div>
  );
}

export default ExpenseCard;
