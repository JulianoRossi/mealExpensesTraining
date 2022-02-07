import React, { useContext } from 'react';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const context = useContext(CartContext);
  console.log('state do cart é:');
  console.log(context);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {context.items.map((item) => {
        return <li key={Math.random()}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{context.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
