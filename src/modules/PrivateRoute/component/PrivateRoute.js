import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  return localStorage.getItem("access_token") ?
    (
      <Route
        {...rest}
        path={path}
        component={Component}
      />
    )
    :
    (
      <Redirect
        to={{
          pathname: "/facebook-album",
          state: { from: path }
        }}
      />
    )
};

export default PrivateRoute;

