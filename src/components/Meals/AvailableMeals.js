import React from 'react';
import dummyMeals from './dummyMeals.js';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const mealsList = dummyMeals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
