import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/loadingPage";

const store = configureStore();

// store.subscribe(() => {});

// store.dispatch(
//   addExpense({
//     description: "water bill",
//     note: "semester end",
//     amount: 3000,
//     createdAt: 1548352979923
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "gas bill",
//     note: "semester end",
//     amount: 5000,
//     createdAt: 1548352979923
//   })
// );

// store.dispatch(
//   addExpense({
//     description: "Electricity bill",
//     note: "semester end",
//     amount: 1500,
//     createdAt: 1548352979923
//   })
// );

// store.dispatch(setTextFilter("bill"));

// const state_v = store.getState();
// const visibleExpenses = getVisibleExpenses(state_v.expenses, state_v.filters);
// console.log(visibleExpenses);
// console.log("test");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout);
    renderApp();
    history.push("/");
  }
});
