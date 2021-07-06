import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
  //   let  = props.expense;
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h4 className="list-item__title list-item__char-limit ">
          {description}
        </h4>
        <span className="list-item__sub-title">
          {moment(createdAt).format("MMMM Do, YYYY")},
        </span>
        <br />
        <span className="list-item__sub-title list-item__char-limit">
          {note}
        </span>
      </div>
      <h4 className="list-item__data">{numeral(amount).format("$0,0.00")}</h4>
    </Link>
  );
};

export default connect()(ExpenseListItem);
