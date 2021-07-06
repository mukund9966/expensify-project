import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const Login = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">EXPENSIFY</h1>
        <p>keep track of your expenses</p>
        <button className="std-button" onClick={startLogin}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
