import React from "react";

function Header({children}){
    return(
    <header className="header">
        <div className="headerImg">
            <img srcSet="/bigFoodsLarge.png" className="headerLogoBig" alt="Burger logo" />
        </div>
        {children}
    </header>
    )
}

export { Header}