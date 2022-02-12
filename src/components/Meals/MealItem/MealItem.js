import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';

const MealItem = (props) => {
  const mealsContext = useContext(CartContext);

  const addItemHandler = (amount) => {
    console.log('meals context is: ');
    console.log(mealsContext);

    const newItemObject = {
      key: Math.random(),
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    };

    mealsContext.addItem(newItemObject);
  };

  return (
    <li className={styles.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealItem;
