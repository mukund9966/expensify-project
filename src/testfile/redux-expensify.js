import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Action generators

// Add_Expense
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "Add_Expense",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// Remove_Expense
const removeExpense = ({ id }) => ({
  type: "Remove_Expense",
  id
});

// Edit_Expense
const editExpense = (id, updates) => ({
  type: "Edit_Expense",
  id,
  updates
});

// Set_text_filter
const setTextFilter = (text = " ") => ({
  type: "Set_text_filter",
  text
});

// Sort_by_date;
const sortByDate = () => ({
  type: "Sort_by_date"
});

// Sort_by_amount
const sortByAmount = () => ({
  type: "Sort_by_amount"
});

// Set_startDate
const setStartDate = (startDate = undefined) => ({
  type: "Set_start_date",
  startDate
});

// Set_endDate
const setEndDate = (endDate = undefined) => ({
  type: "Set_end_date",
  endDate
});

// Expenses_Reducer
const expenseReducer_default_state = [];
const expenseReducer = (state = expenseReducer_default_state, action) => {
  switch (action.type) {
    case "Add_Expense":
      return [...state, action.expense];
    case "Remove_Expense":
      return state.filter(({ id }) => id !== action.id);
    case "Edit_Expense":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters_Reducer
const filterReducer_default_state = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducer_default_state, action) => {
  switch (action.type) {
    case "Set_text_filter":
      return {
        ...state,
        text: action.text
      };
    case "Sort_by_amount":
      return {
        ...state,
        sortBy: "amount"
      };
    case "Sort_by_date":
      return {
        ...state,
        sortBy: "date"
      };
    case "Set_start_date":
      return {
        ...state,
        startDate: action.startDate
      };
    case "Set_end_date":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible expenses after filter:
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startdateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const enddateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startdateMatch && enddateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Create_Store
const store = createStore(
  combineReducers({ expenses: expenseReducer, filters: filterReducer })
);

store.subscribe(() => {
  const state1 = store.getState();
  const visibleExpenses = getVisibleExpenses(state1.expenses, state1.filters);
  console.log(visibleExpenses);
});

const expense_one = store.dispatch(
  addExpense({ description: "Salary", amount: 500000, createdAt: -1300 })
);

const expense_two = store.dispatch(
  addExpense({ description: "Coffee", amount: 20000000, createdAt: -500 })
);

// const expense_three = store.dispatch(
//   addExpense({ description: "Gift", amount: 30000 })
// );

// store.dispatch(removeExpense({ id: expense_three.expense.id }));
// store.dispatch(editExpense(expense_two.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter());

store.dispatch(setStartDate(-1800));
store.dispatch(setEndDate(0));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setTextFilter("coffee"));

const demoState = {
  expenses: [
    {
      id: "ucs",
      description: "January Salary",
      note: "This is the final Salary",
      amount: 500000,
      createdAt: 0
    }
  ],
  filters: {
    text: "salary",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};

// const user = {
//   name: "Arya",
//   age: 21
// };

// console.log({ ...user, age: 27, location: "Rajasthan" });
