import { useApp } from "../../context/AppContext";
import { useState } from "react";

export default function TransactionTable() {
  const { transactions, setTransactions, role } = useApp();

  const [search, setSearch] = useState("");

  // 👇 NEW FORM STATE
  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: ""
  });

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // 👇 Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 👇 Add Transaction
  const addTransaction = () => {
    if (!form.amount || !form.category || !form.date) {
      alert("Please fill all fields");
      return;
    }

    const newTx = {
      id: Date.now(),
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
      date: form.date
    };

    setTransactions([...transactions, newTx]);

    // reset form
    setForm({
      amount: "",
      category: "",
      type: "expense",
      date: ""
    });
  };

  return (
    <div className="card">

      {/* 🔍 Search */}
      <div className="table-header">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🧾 FORM (ONLY ADMIN) */}
      {role === "admin" && (
        <div className="form">
          <input
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <select name="type" value={form.type} onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <button onClick={addTransaction}>Add</button>
        </div>
      )}

      {/* 📊 TABLE */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}