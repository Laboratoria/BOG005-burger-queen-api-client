import React, {useState} from 'react';
const BurgerContext = React.createContext();

function BurgerProvider(props) {

  /*agregar estados usados*/
  const [users, setUsers] = useState([])
  const [openModal, setOpenModal] = useState(false);
  const [editUserState, setEditUserState] = useState(false);
  const [dataNewUser, setDataNewUser] = useState({
    email: '',
    password: '',
    role: ''
})
const [stateAdmin, setStateAdmin]= useState(false);
const [products, setProducts]= useState([])
const [editProductState, setEditProductState] = useState(false)
const [newProduct, setnewProduct] = useState({
  name: '',
  price: 0,
  image: '',
  type:'',
  dateEntry: new Date(),
});
const [cartItems, setCartItems] = useState([]);
const [stateWaiter, setStateWaiter]= useState(true);
const [listOrders, setListOrders]= useState([])

  
  return (
    <BurgerContext.Provider value={{
      users,
      setUsers,
      openModal,
      setOpenModal,
      editUserState,
      setEditUserState,
      dataNewUser,
      setDataNewUser,
      stateAdmin,
      setStateAdmin,
      products, 
      setProducts,
      editProductState,
      setEditProductState,
      newProduct, 
      setnewProduct,
      cartItems,
      setCartItems,
      stateWaiter, 
      setStateWaiter,
      listOrders,
      setListOrders,
    }}>
      {props.children}
    </BurgerContext.Provider>
  );
}

export { BurgerContext, BurgerProvider };
