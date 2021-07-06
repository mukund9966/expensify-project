import React, { Component } from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import { Link } from "react-router-dom";

const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? "EXPENSE" : "EXPENSES";
  const formatExpenseTotal = numeral(expenseTotal).format("$0,0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          VIEWING <span>{expenseCount}</span> {expenseWord}, TOTALLING{" "}
          <span>{formatExpenseTotal}</span>
        </h2>
        <div className="page-header__actions">
          <Link className="no-decoration" to="/create">
            ADD EXPENSE
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
