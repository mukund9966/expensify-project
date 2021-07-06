// Higher order componenets (HOC) => a component (HsOC) that renders another component
// Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract State

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This is some info: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is some private info. Don't Share !!!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication
const requireAuthentication = wrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <wrappedComponent {...props} />
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info={"some details"} />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info={"some details"} />,
  document.getElementById("app")
);
