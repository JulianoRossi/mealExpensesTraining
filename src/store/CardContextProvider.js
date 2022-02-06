import React from 'react';
import CardContext from './CardContext';

function CardContextProvider(props) {
  const addNewItem = (item) => {};

  const removeOldItem = (item) => {};

  const cardData = {
    items: [],
    totalAmount: 0,
    addItem: addNewItem,
    removeItem: removeOldItem,
  };

  return (
    <CardContext.Provider value={cardData}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
