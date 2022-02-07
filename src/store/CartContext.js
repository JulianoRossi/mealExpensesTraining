import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalAmountOfItems: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
