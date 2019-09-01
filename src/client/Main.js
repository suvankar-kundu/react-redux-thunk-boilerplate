import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
class Main extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Main;