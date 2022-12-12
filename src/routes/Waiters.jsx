import React from "react";
import { getProducts } from "../petitions/userPetition";
import ProductsTable from "../components/ProductsTable";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import "./styles/Waiters.css";


export function Waiters () {
  const [productsOptions, setProductsOptions] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProductsOptions = async () => {
      const result = await getProducts();
      setProductsOptions(result);
    };
    getProductsOptions(); 
  }, [orderList]);

  const selectOption = (e) => {
    const resultFilter = productsOptions.filter((product) => {
      if (e.target.value === product.type) {
        return true;
      }
      return false;
    });
    setProductsList(resultFilter);
  };

  return (
    <div>
      <section className="options-container">
        <Header />
        <section className="optionsListContainer">
          <select className="optionMenu" onChange={selectOption}>
            <option value="Seleccione Desayuno/Almuerzo y Cena">
              Seleccione una opción
            </option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo Y Cena</option>
          </select>
          {productsList.map((product, id) => {
            return (
              <div key={id} className="listProductsOrder">
                <ProductsTable
                product={product}
                dataEntry={new Date()}
                ></ProductsTable>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
}

export default Waiters;