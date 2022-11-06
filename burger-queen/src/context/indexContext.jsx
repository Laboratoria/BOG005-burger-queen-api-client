import React, {useState} from 'react';
const BurgerContext = React.createContext();

function BurgerProvider(props) {

  /*agregar estados usados*/
  const [openModal, setOpenModal] = useState(false);
  const [editUserState, setEditUserState] = useState(false);
  const [dataNewUser, setDataNewUser] = useState({
    email: '',
    password: '',
    role: ''
})
  
  return (
    <BurgerContext.Provider value={{
      openModal,
      setOpenModal,
      editUserState,
      setEditUserState,
      dataNewUser,
      setDataNewUser,
    }}>
      {props.children}
    </BurgerContext.Provider>
  );
}

export { BurgerContext, BurgerProvider };
