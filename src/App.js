import React from 'react';

import './styles/App.scss';

const App = () => {

  return (
    <div className="app">
      <header className="header">
        <h1  className="header-title">Season respected</h1>
      </header>
      <main className="main">
        <select className="month" id="month" defaultValue="0">
          <option className="month-name" value="0">Janvier</option>
          <option className="month-name" value="1">Février</option>
          <option className="month-name" value="2">Mars</option>
          <option className="month-name" value="3">Avril</option>
          <option className="month-name" value="4">Mai</option>
          <option className="month-name" value="5">Juin</option>
          <option className="month-name" value="6">Juillet</option>
          <option className="month-name" value="7">Août</option>
          <option className="month-name" value="8">Septembre</option>
          <option className="month-name" value="9">Octobre</option>
          <option className="month-name" value="10">Novembre</option>
          <option className="month-name" value="11">Décembre</option>
        </select>

        <ul className="list">
          <li className="list-item">Carotte</li>
          <li className="list-item">Endive</li>
          <li className="list-item">Pomme de terre</li>
        </ul>
        
      </main>
    </div>
  );
}

export default App;
