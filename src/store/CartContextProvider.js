import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialState = {
  items: [],
  totalAmount: 0,
  totalAmountOfItems: 0,
};

const updateCartData = (state, action) => {
  if (action.type === 'ADD') {
    const newArray = state.items.concat(action.item);
    const newTotalAmountOfItems =
      +state.totalAmountOfItems + +action.item.amount;
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

function CartContextProvider(props) {
  const [cartDataState, dispatch] = useReducer(updateCartData, initialState);

  const addNewItem = (item) => {
    return dispatch({ type: 'ADD', item: item });
  };

  const removeOldItem = (item) => {
    return dispatch({ type: 'REMOVE', item: item });
  };

  const cartData = {
    items: cartDataState.items,
    totalAmount: cartDataState.totalAmount,
    totalAmountOfItems: cartDataState.totalAmountOfItems,
    addItem: addNewItem,
    removeItem: removeOldItem,
  };

  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
