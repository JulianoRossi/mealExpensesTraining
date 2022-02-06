import React, { useState } from 'react';

import Context from './store/context';
import CardContextProvider from './store/CardContextProvider';
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

  const contextValues = {
    show: showModalHandler,
    hide: dismissModalHandler,
    items: 0,
  };

  return (
    <CardContextProvider>
      <Context.Provider value={contextValues}>
        {cartIsShown && <Modal onModalHide={dismissModalHandler} />}
        <Header onModalShow={showModalHandler} />
        <main>
          <Meals />
        </main>
      </Context.Provider>
    </CardContextProvider>
  );
}

export default App;
