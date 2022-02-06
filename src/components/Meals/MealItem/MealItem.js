import React from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  console.log('props is');
  console.log(props);
  return (
    <li className={styles.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
