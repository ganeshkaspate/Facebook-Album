import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute/component/PrivateRoute';
import Facebook from '../../Login/components/LoginWithFb';
import history from '../../../history';


class Main extends Component {


  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/facebook-album" component={Facebook} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default Main;
