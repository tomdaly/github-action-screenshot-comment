import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import NotFoundPage from './NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  );
}

export default App;
