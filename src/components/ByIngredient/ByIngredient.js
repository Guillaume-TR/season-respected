import React, { useState } from 'react';

import monthsList from 'data/monthsList';
import ingredientsList from 'data/ingredientsList';

const ByIngredient = () => {
  const firstIngredient = ingredientsList[0];

  const [ingredient, setIngredient] = useState(firstIngredient);

  const monthFlitred = monthsList.filter((month) => {
    let monthFound = false;

    ingredient.months.forEach((ingredientMonth) => {
      if (ingredientMonth === month.number) {
        monthFound = true
      }
    })

    return monthFound;
  })

  return (
    <>
      <select className="ingredient" id="ingredient" defaultValue={ingredient.id}>
        { ingredientsList.map((ingredient) => (
          <option
            className="item-name" value={ingredient.id} 
            onClick={() => setIngredient(ingredient)}
            key={ingredient.name}
          >
            {ingredient.name}
          </option>
        )) }
      </select>

      <ul className="list">
      { monthFlitred.map((month) => (
        <li className="list-item" key={month.name} >{month.name}</li>
      )) }
    </ul>
    </>
  );
}

export default ByIngredient;
