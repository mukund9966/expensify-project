import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => {
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">EXPENSES</div>
        <div className="show-for-desktop">EXPENSE</div>
        <div className="show-for-desktop">AMOUNT</div>
      </div>
      <div className="list-body">
        {props.expenses.length === 0 ? (
          <div className="list-item list-item__message">
            <span>NO EXPENSES</span>
          </div>
        ) : (
          props.expenses.map(expense => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);