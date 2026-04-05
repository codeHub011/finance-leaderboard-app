import { useApp } from "../../context/AppContext";

export default function Insights() {
  const { transactions } = useApp();

  const categoryMap = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="card">
      <h2>Insights</h2>
      <p>Highest Spending: {highest?.[0]}</p>
    </div>
  );
}s