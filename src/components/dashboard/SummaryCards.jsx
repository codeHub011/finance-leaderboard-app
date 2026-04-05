import { useApp } from "../../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useApp();

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="cards">
      <div className="card">Balance: ₹{income - expense}</div>
      <div className="card">Income: ₹{income}</div>
      <div className="card">Expense: ₹{expense}</div>
    </div>
  );
}