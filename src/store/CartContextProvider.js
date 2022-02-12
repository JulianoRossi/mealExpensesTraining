import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialState = {
  items: [],
  totalAmount: 0,
  totalAmountOfItems: 0,
};

const updateCartData = (state, action) => {
  let newArray = [...state.items];

  const itemIndex = state.items.findIndex((item) => {
    return item.name === action.item.name;
  });

  if (action.type === 'ADD') {
    if (itemIndex >= 0) {
      newArray[itemIndex] = {
        ...state.items[itemIndex],
        amount: +state.items[itemIndex].amount + +action.item.amount,
      };
    } else {
      newArray = state.items.concat(action.item);
    }
  } else if (action.type === 'REMOVE') {
    if (itemIndex >= 0) {
      newArray[itemIndex] = {
        ...state.items[itemIndex],
        amount: +state.items[itemIndex].amount - +action.item.amount,
      };
    }
  }

  const newTotalAmountOfItems = +state.totalAmountOfItems + +action.item.amount;
  const newTotalAmount = newArray.reduce((acc, curr) => {
    return (acc = acc + +curr.amount * +curr.price);
  }, 0);
  // console.log('CardState');
  // console.log({
  //   items: newArray,
  //   totalAmountOfItems: newTotalAmountOfItems,
  //   totalAmount: newTotalAmount,
  // });
  return {
    items: newArray,
    totalAmountOfItems: newTotalAmountOfItems,
    totalAmount: newTotalAmount,
  };
};

function CartContextProvider(props) {
  const [cartDataState, dispatch] = useReducer(updateCartData, initialState);

  const addNewItem = (item) => {
    console.log('adicionando novo item');
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
