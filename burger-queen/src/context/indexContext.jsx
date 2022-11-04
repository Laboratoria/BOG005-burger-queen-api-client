import React from 'react';
const BurgerContext = React.createContext();

function BurgerProvider(props) {

  /*agregar estados usados*/
  const [openModal, setOpenModal] = React.useState(false);
  
  return (
    <BurgerContext.Provider value={{
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </BurgerContext.Provider>
  );
}

export { BurgerContext, BurgerProvider };
