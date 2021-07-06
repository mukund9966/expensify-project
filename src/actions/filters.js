// Set_text_filter
export const setTextFilter = (text = " ") => ({
  type: "Set_text_filter",
  text
});

// Sort_by_date;
export const sortByDate = () => ({
  type: "Sort_by_date"
});

// Sort_by_amount
export const sortByAmount = () => ({
  type: "Sort_by_amount"
});

// Set_startDate
export const setStartDate = (startDate = undefined) => ({
  type: "Set_start_date",
  startDate
});

// Set_endDate
export const setEndDate = (endDate = undefined) => ({
  type: "Set_end_date",
  endDate
});
