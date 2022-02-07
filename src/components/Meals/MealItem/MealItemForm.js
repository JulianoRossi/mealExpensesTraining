import React, { useContext, useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../store/CartContext';

const MealItemForm = (props) => {
  const data = useContext(CartContext);
  const inputRef = useRef();

  const submitAddItemHandler = (event) => {
    event.preventDefault();
    console.log('the amount inputted is: ');
    console.log(inputRef.current.value);

    props.addItem(inputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={submitAddItemHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: props.id,
          type: 'number',
          max: '5',
          min: '1',
          step: '1',
          defaultValue: data.state.items.length,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
