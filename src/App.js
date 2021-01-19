import React, { useState } from 'react';

import List from './components/List';
import monthsList from './data/monthsList';

import './styles/App.scss';

const App = () => {
  const date = new Date();
  const currentMonth = date.getMonth();

  const [month, setMonth] = useState(currentMonth);

  return (
    <div className="app">
      <header className="header">
        <h1  className="header-title">Season respected</h1>
      </header>
      <main className="main">

        <select className="month" id="month" defaultValue={month}>
          { monthsList.map((item) => (
            <option
              className="month-name" value={item.number} 
              onClick={() => setMonth(item.number)}
              key={item.name}
            >
              {item.name}
            </option>
          )) }
        </select>

        <List monthSelected={month}></List>
        
      </main>
    </div>
  );
}

export default App;
