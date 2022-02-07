import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon.js';
import ModalContext from '../../store/ModalContext';
import CardContext from '../../store/CardContext';

export default function HeaderCartButton(props) {
  console.log('carregou o Card Button');
  console.log(CardContext);
  const modalContext = useContext(ModalContext);
  const cardContext = useContext(CardContext);

  return (
    <button className={styles.button} onClick={modalContext.show}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cardContext.items.length}</span>
    </button>
  );
}
