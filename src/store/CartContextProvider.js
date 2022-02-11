import React, { useReducer } from 'react';
import CartContext from './CartContext';

const initialState = {
  items: [],
  totalAmount: 0,
  totalAmountOfItems: 0,
};

const updateCartData = (state, action) => {
  if (action.type === 'ADD') {
    const itemIndex = state.items.findIndex((item) => {
      console.log(item.name);
      return item.name === action.item.name;
    });
    console.log(`index é : ${itemIndex}`);
    let newArray = [...state.items];

    if (itemIndex >= 0) {
      newArray[itemIndex] = {
        ...state.items[itemIndex],
        amount: +state.items[itemIndex].amount + +action.item.amount,
      };
    } else {
      newArray = state.items.concat(action.item);
    }

    const newTotalAmountOfItems =
      +state.totalAmountOfItems + +action.item.amount;
    const newTotalAmount = newArray.reduce((acc, curr) => {
      return (acc = acc + +curr.amount * +curr.price);
    }, 0);

    console.log('newest items updatedCartData');
    console.log(newArray);
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
    console.log('o item adicionado é:');
    console.log(item);
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
