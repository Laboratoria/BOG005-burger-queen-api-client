import "../Styles/Order.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import icon from "../img/button-back.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, ListGroup, Card } from "react-bootstrap";

export function Breakfast() {
  const url = "http://localhost:8080/products";
  const order = " http://localhost:8080/orders";

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  const [productosAgregados, setProductosAgregados] = useState([]);
  const [nombreCliente, setNombreCliente] = useState("");

  const [allproducts, setAllproducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
   const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      })
      .then((response) => {
        setProducts(response.data);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //  let quantity = 1;
 
  const addProduct = (filterType) => {
    
    console.log("yo soy filter", filterType);
    if (allproducts.find((item) => item.id === filterType.id)) {
      const products = allproducts.map((item) =>
        item.id === filterType.id
          ? { ...item, quantity:setQuantity(quantity+1) }
          : item
      
      
      );
     
       console.log("este es qunantity 1", quantity);
      return setAllproducts([...products]);
    }
    setAllproducts([...allproducts, filterType]);
  };

  // const pedidoCrear = {
  //   userId: localStorage.getItem("userId"),
  //   client: nombreCliente,
  //   products: productosAgregados.map((producto) => {
  //     return {
  //       quantity: 1,
  //       product: {
  //         ...producto,
  //       },
  //     };
  //   }),
  //   status: "pending",
  //   dateEntry: "2022-03-05 15:14:10",
  // };

  // useEffect(() => {
  //   axios({
  //     method: "POST",
  //     url: order,
  //     data: pedidoCrear,
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("Token")}`,
  //     },
  //   })
  //     .then((response) => {
  //       setOrders(response.data);

  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <section className="order-breakfast">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Pedido</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                {" "}
                <Link to="/lounch">Almuerzo</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Nav className="nav">
        <Nav.Item>
          <Nav.Link>
            <Link to="/order">
              <img src={icon} alt="icon-back" className="icon-back" />
            </Link>
          </Nav.Link>
        </Nav.Item>
        <h1 className="title-pedido">Desayuno</h1>
        <Nav.Item>
          <Button variant="success">ENVIAR</Button>{" "}
        </Nav.Item>
      </Nav>
      <main>
        <div className="container-product">
          {products
            .filter((product) => product.type.includes("Desayuno"))
            .map((filterType) => (
              <Card className="cards-products" key={filterType.id}>
                <Card.Text onClick={() => setActive(!active)}>
                  {" "}
                  {filterType.name}
                </Card.Text>
                {/* <figure>
                  <img src={filterType.image} alt={filterType.nameProduct} />
                </figure> */}

                <Card.Text>${filterType.price}</Card.Text>
                <Button onClick={() => addProduct(filterType)}>
                  {" "}
                  Añadir al pedido{" "}
                </Button>
              </Card>
            ))}
        </div>
      </main>
      <section className="container-card-products">
        {/* <Card className="row-product hidden"> 
      <div className="count-products"> 
      <Card.Text id =" contador-productos"> 0 </Card.Text>
      </div>
      </Card> */}
        <div className={`container-cart-products`}>
          {allproducts.length ? (
            <>
              <div className="row-product">
                {allproducts.map((filterType) => (
                  <div className="cart-product" key={filterType.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {filterType.quantity}
                      </span>
                      <p className="titulo-producto-carrito">
                        {filterType.name}
                      </p>

                      <span className="precio-producto-carrito">
                        ${filterType.price}
                      </span>
                    </div>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      // onClick={() => onDeleteProduct(product)}
                    >
                      {/* <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        /> */}
                    </svg>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total:</h3>
                <span className="total-pagar">${total}</span>
              </div>
              {/* <button className='btn-clear-all' onClick={onCleanCart}>
                Vaciar Carrito
              </button> */}
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )}
        </div>
      </section>
    </section>
  );
}
