import moment from "moment";

// Filters_Reducer
const filterReducer_default_state = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};
export default (state = filterReducer_default_state, action) => {
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
