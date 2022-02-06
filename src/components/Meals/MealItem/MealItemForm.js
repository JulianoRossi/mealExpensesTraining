import React, { useContext, useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CardContext from '../../../store/CardContext';

const MealItemForm = (props) => {
  const data = useContext(CardContext);
  const ref = useRef();

  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: props.id,
          type: 'number',
          max: '5',
          min: '1',
          step: '1',
          defaultValue: data.items.length,
        }}
        ref={ref}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
