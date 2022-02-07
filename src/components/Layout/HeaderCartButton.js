import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon.js';
import ModalContext from '../../store/ModalContext';
import CartContext from '../../store/CartContext';

export default function HeaderCartButton(props) {
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);

  console.log('carregou o Card Button');
  console.log(cartContext);

  return (
    <button className={styles.button} onClick={modalContext.show}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.state.items.length}</span>
    </button>
  );
}
