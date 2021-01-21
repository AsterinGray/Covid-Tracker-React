import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProvincePage from './pages/ProvincePage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/province" component={ProvincePage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
