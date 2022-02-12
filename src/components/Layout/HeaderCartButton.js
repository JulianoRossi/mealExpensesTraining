import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon.js';
import ModalContext from '../../store/ModalContext';
import CartContext from '../../store/CartContext';

export default function HeaderCartButton(props) {
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);
  const [buttonBump, setButtonBump] = useState(false);

  // const buttonClasses = `${styles.button} ${buttonBump ? styles.bump : ''}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }
    setButtonBump(true);
    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button
      className={`${styles.button} ${buttonBump ? styles.bump : ''}`}
      onClick={modalContext.show}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.items.length}</span>
    </button>
  );
}
