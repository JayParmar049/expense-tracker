function Balance({ transactions }) {
  const amounts = transactions.map((tx) =>
    tx.type === "income" ? tx.amount : -tx.amount
  );
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);

  return (
    <div className="bg-white rounded-xl p-4 shadow mb-4 text-center">
      <h2 className="text-xl font-semibold">Your Balance</h2>
      <p className="text-3xl font-bold text-green-600">₹{total}</p>
    </div>
  );
}

export default Balance;
