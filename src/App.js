import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import ByMonth from 'components/ByMonth';
import ByIngredient from 'components/ByIngredient';

import './styles/app.scss';

const App = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1  className="header-title">Season respected</h1>
        <div className={classNames('header-menu', { 'menu-active': menuActive })}>
          <div className="header-menu-links">
            <NavLink 
              className="link" 
              to="/by-month" 
              onClick={() => setMenuActive(false)}
            >
              <span>Par mois</span>
            </NavLink>
            <NavLink 
              className="link" 
              to="/by-ingredient" 
              onClick={() => setMenuActive(false)}
            >
              <span>Par ingredient</span>
            </NavLink>
          </div>

          <button 
            className="header-menu-button" 
            onClick={() => setMenuActive(!menuActive)}
          >
            <span dangerouslySetInnerHTML={{ __html: (menuActive ? '&#10539;' : '&#9776;')}} />
          </button>
        </div>
      </header>
      <main className="main">
        <Switch>
          <Route exact path={["/", "/by-month"]}>
            <ByMonth />
          </Route>
          <Route exact path="/by-ingredient">
            <ByIngredient />
          </Route>
        </Switch>
      </main>
    </div>
  )
};

export default App;
