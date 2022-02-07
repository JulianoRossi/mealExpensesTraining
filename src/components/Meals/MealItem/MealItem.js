import React, { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CardContext from '../../../store/CardContext';

const MealItem = (props) => {
  const mealsContext = useContext(CardContext);

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

    mealsContext.items.push(newItemObject);
    console.log(mealsContext.items);
    mealsContext.totalAmount = mealsContext.items.reduce((acc, item) => {
      console.log(`acc: ${acc}`);
      console.log(`item: ${item}`);
      return (acc = acc + +item.price * +item.amount);
    }, 0);

    console.log(`mealsContext updated is`);
    console.log(mealsContext);
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
