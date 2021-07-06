import React from "react";
import ExpenseList from "../components/expenseList";
import ExpenseListFilters from "../components/expenseListFilters";
import ExpensesSummary from "./expensesSummary";
const ExpenseDashboard = () => (
  <div>
    <div className="dashboard">
      <ExpensesSummary />
      <ExpenseListFilters />
    </div>
    <ExpenseList />
  </div>
);
export default ExpenseDashboard;
