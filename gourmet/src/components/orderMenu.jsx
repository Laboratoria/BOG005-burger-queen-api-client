import React from "react";


function OrderMenu(props) {

    return (
        <section className="viewMenuOrder">
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