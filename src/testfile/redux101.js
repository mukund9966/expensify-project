import { createStore } from "redux";

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "Increment",
  incrementBy
  // typeof incrementBy === "number" ? incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "Decrement",
  decrementBy
});

const resetCount = () => ({
  type: "Reset"
});

const setCount = ({ count = 0 }) => ({
  type: "Set",
  count
});

// Reducers
//1. Reducers are pure functions
//2. Never change state or action

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + action.incrementBy
      };
    case "Decrement":
      return {
        count: state.count - action.decrementBy
      };
    case "Reset":
      return {
        count: 0
      };
    case "Set":
      return {
        count: action.count
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 15 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
// unsubscribe();
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 101 }));
