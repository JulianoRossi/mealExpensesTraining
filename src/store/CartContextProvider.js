import React, { useReducer } from 'react';
import CartContext from './CartContext';

function CartContextProvider(props) {
  const addNewItem = (item) => {};

  const removeOldItem = (item) => {};

  const cardData = {
    items: [],
    totalAmount: 0,
    totalAmountOfItems: 0,
    addItem: addNewItem,
    removeItem: removeOldItem,
  };

  const updateCartData = (state, action) => {
    if (action.type === 'ADD') {
      const newArray = state.items.concat(action.newItem);
      const newTotalAmountOfItems =
        +state.totalAmountOfItems + +action.newItem.amount;
      const newTotalAmount = newArray.reduce((acc, curr) => {
        return (acc = acc + +curr.amount * +curr.price);
      }, 0);

      return {
        items: newArray,
        totalAmountOfItems: newTotalAmountOfItems,
        totalAmount: newTotalAmount,
      };
    }
  };

  const [cartDataState, dispatch] = useReducer(updateCartData, cardData);

  return (
    <CartContext.Provider value={{ state: cartDataState, action: dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
