import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("IsLoggedIn")
  return (
    <Route
      {...rest}
      render={(props) => {
        return user==="true" ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
