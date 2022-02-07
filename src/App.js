import React, { useState } from 'react';

import ModalContext from './store/ModalContext';
import CartContextProvider from './store/CartContextProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from './components/Cart/Modal';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showModalHandler = () => {
    console.log('mostrar o modal');
    setCartIsShown(true);
  };

  const dismissModalHandler = () => {
    setCartIsShown(false);
  };

  const modalContextValues = {
    show: showModalHandler,
    hide: dismissModalHandler,
    items: 0,
  };

  return (
    <CartContextProvider>
      <ModalContext.Provider value={modalContextValues}>
        {cartIsShown && <Modal onModalHide={dismissModalHandler} />}
        <Header onModalShow={showModalHandler} />
        <main>
          <Meals />
        </main>
      </ModalContext.Provider>
    </CartContextProvider>
  );
}

export default App;
