import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Cart from './Cart';
import Context from '../../store/context';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Cart onClick={props.onClick} />
    </div>
  );
};

const DOMElement = document.getElementById('backdrop');

const Modal = (props) => {
  const newContext = useContext(Context);
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={newContext.hide} />,
        DOMElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={newContext.hide} />,
        DOMElement
      )}
    </>
  );
};

export default Modal;
