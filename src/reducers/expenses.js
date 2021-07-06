// Expenses_Reducer
const expenseReducer_default_state = [];
export default (state = expenseReducer_default_state, action) => {
  switch (action.type) {
    case "Add_Expense":
      return [...state, action.expense];
    case "Remove_Expense":
      return state.filter(({ id }) => id !== action.id);
    case "Edit_Expense":
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    case "Set_Expenses":
      return action.expenses;
    default:
      return state;
  }
};
