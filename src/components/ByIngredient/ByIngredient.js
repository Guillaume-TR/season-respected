import React, { useState } from 'react';
import classeNames from 'classnames';

import { reduceMonthWord } from 'helpers/functions';
import monthsList from 'data/monthsList';
import ingredientsList from 'data/ingredientsList';

import 'styles/byIngredient.scss';

const ByIngredient = () => {
  const firstIngredient = ingredientsList[0];

  const [ingredient, setIngredient] = useState(firstIngredient);

  const monthFlitred = monthsList.filter((month) => {
    let checked = false;
    month.checked = false;

    ingredient.months.forEach((ingredientMonth) => {
      if (!checked && (ingredientMonth === month.number)) {
        checked = true;
        month.checked = true;
      }
    })
    
    return month;
  })

  const changeIngredient = (ingredientId) => {
    ingredientId = Number(ingredientId);

    const indgredientFound = ingredientsList.find(item => (item.id === ingredientId));
    
    setIngredient(indgredientFound)
  } 

  return (
    <>
      <select
        className="select-list"
        id="select-list"
        defaultValue={ingredient.id}
        onChange={({target: { value }}) => changeIngredient(value)}
      >
        { ingredientsList.map((ingredient) => (
          <option
            className="select-list-item" value={ingredient.id}
            key={ingredient.name}
          >
            {ingredient.name}
          </option>
        )) }
      </select>

      <div className="calendar">
        { monthFlitred.map((month) => (
          <div className="calendar-month" key={month.name}>
            <div className="calendar-month-name">
              {reduceMonthWord(month.name)}
            </div>
            <div className={classeNames('calendar-month-check', {'checked': month.checked})} />
          </div>
        )) }
        
      </div>
    </>
  );
}

export default ByIngredient;
