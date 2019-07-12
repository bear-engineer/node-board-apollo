import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/admin" component={Admin} />
      </Switch>
    </Fragment>
  );
}

export default App;
