import React, { useState } from 'react';

import './styles/App.scss';

import itemsList from './data/itemsList'
import monthsList from './data/monthsList';

const App = () => {
  const date = new Date();
  const currentMonth = date.getMonth();

  const [month, setMonth] = useState(currentMonth);

  const items = itemsList.filter( item => item.months.includes(month))

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

        <ul className="list">
          { items.map((item) => (
            <li className="list-item" key={item.name} >{item.name}</li>
          )) }
        </ul>
        
      </main>
    </div>
  );
}

export default App;
