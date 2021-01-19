import React from 'react';
import PropTypes from 'prop-types';

import itemsList from '../data/itemsList';

const List = ({ monthSelected }) => {
  const itemsFiltred = itemsList.filter( item => item.months.includes(monthSelected))

  return (
    <ul className="list">
      { itemsFiltred.map((item) => (
        <li className="list-item" key={item.name} >{item.name}</li>
      )) }
    </ul>
  )
};

List.propTypes = {
  monthSelected: PropTypes.number,
}

export default List;
