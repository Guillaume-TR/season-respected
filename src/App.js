import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ByMonth from 'components/ByMonth';
import ByIngredient from 'components/ByIngredient';

import './styles/App.scss';

const App = () => (
  <div className="app">
    <header className="header">
      <h1  className="header-title">Season respected</h1>
    </header>
    <main className="main">
      <Switch>
        <Route exact path={["/", "by-month"]}>
          <ByMonth />
        </Route>
        <Route exact path="/by-ingredient">
          <ByIngredient />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
