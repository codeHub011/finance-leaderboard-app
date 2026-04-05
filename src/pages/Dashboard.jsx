import SummaryCards from "../components/dashboard/SummaryCards";
import Insights from "../components/dashboard/Insights.jsx";
import TransactionTable from "../components/transactions/TransactionTable";
import RoleSwitcher from "../components/common/RoleSwitcher";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      <SummaryCards />

<div className="section-gap">
  <Insights />
</div>

<div className="section-gap">
  <TransactionTable />
</div>
    </div>
  );
}