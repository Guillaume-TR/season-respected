import React, { useState } from 'react';

import monthsList from 'data/monthsList';
import ingredientsList from 'data/ingredientsList';

import 'styles/byMonth.scss';

const ByMonth = () => {
  const date = new Date();
  const currentMonth = date.getMonth();

  const [month, setMonth] = useState(currentMonth);

  const ingredientFiltred = ingredientsList.filter( item => item.months.includes(month))

  return (
    <>
      <select className="select-list" id="select-list" defaultValue={month}>
        { monthsList.map((item) => (
          <option
            className="select-list-item" value={item.number} 
            onClick={() => setMonth(item.number)}
            key={item.name}
          >
            {item.name}
          </option>
        )) }
      </select>

      <ul className="list">
      { ingredientFiltred.map((ingredient) => (
        <li className="list-item" key={ingredient.name} >{ingredient.name}</li>
      )) }
    </ul>
    </>
  );
}

export default ByMonth;
