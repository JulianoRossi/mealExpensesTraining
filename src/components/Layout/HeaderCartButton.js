import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon.js';
import Context from '../../store/context';

export default function HeaderCartButton(props) {
  const newContext = useContext(Context);
  return (
    <button className={styles.button} onClick={newContext.show}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}
