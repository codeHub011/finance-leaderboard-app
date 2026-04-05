# 💰 Finance Dashboard

A modern, responsive finance dashboard built using React that helps users track financial activity, manage transactions, and gain insights into spending patterns.

---

## Live Demo

👉[ https://your-vercel-link.vercel.app](https://financial-leaderboard-app-kge1.vercel.app/)

---

## 📌 Features

* 📊 **Dashboard Overview**
  Summary cards for Total Balance, Income, and Expenses with a clean layout.

* 💳 **Transactions Section**
  View all transactions with date, amount, category, and type.
  Includes search/filter and add transaction functionality (Admin only).

* 🔐 **Role-Based UI**

  * Admin → Can add transactions
  * Viewer → Read-only access

* 📈 **Insights**
  Automatically calculates highest spending category based on data.

* 🎨 **UI/UX**

  * Dark / Light mode toggle
  * Clean and modern design
  * Responsive layout

---

## 🛠️ Tech Stack

* React (Vite)
* Context API (State Management)
* JavaScript (ES6)
* Custom CSS

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── dashboard/
 │    ├── transactions/
 │    └── common/
 ├── pages/
 ├── context/
 ├── data/
 └── styles/
```

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
npm install
npm run dev
```

---

## 🧠 Approach

* Built using component-based architecture for scalability
* Managed global state using Context API
* Implemented role-based UI logic on frontend
* Focused on clean UI, reusability, and user experience

---

## ✨ Future Improvements

* Edit & delete transactions
* Charts (Pie / Bar) for visualization
* Backend integration (API)
* Authentication system
* Data persistence

---

## 👨‍💻 Author

Anil Kumar Yadav

---

## 📌 Notes

This project was created as part of a frontend internship assignment to demonstrate UI design, state management, and frontend development skills.

