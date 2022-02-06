import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon.js';
import Context from '../../store/context';
import CardContext from '../../store/CardContext';

export default function HeaderCartButton(props) {
  console.log('carregou o Card Button');
  console.log(CardContext);
  const itemsContext = useContext(Context);
  const cardContext = useContext(CardContext);

  return (
    <button className={styles.button} onClick={itemsContext.show}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cardContext.items.length ? 1 : 2}</span>
    </button>
  );
}
