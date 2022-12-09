import React from "react";

function OrderMenu(props) {

    return (
        <section className="viewMenuOrder">
            <section className="menuBtns">
                <button className="menuBreakfastBtn">
                    <i className="fa-solid fa-bacon"></i>
                    Desayuno
                </button>
                <button className="menuLunchBtn active">
                    <i className="fa-solid fa-utensils"></i>
                    Almuerzo
                </button>
                <button className="menuDrinksBtn">
                    <i className="fa-solid fa-wine-glass-empty"></i>
                    Bebidas
                </button>
            </section>

            {/* Sección para mostrar los productos */}
            <article className="containProduct">
                <img className="productImage" srcSet={props.image} alt={props.name} />
                <div className="productText">
                    <p>{props.name} <span className="productPrice">${props.price}</span></p>
                </div>
            </article>
        </section>

    )
}

export { OrderMenu }