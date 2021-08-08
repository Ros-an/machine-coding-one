import React from 'react'
import {Link} from "react-router-dom";
import {useCartContext} from "./CartContext";

const customStyle ={
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    background: "blue",
    height: "3rem",
    padding: "0.5rem 1.5rem"
}
function Navbar() {
    const {cart} = useCartContext();
    return (
        <nav style={customStyle}>
            <Link to="/">Flipkart Clone</Link>
            <Link to="/cart">Cart{` `}
            {cart.length !==0 && <span className="cart-badge">
            {cart.length}
            </span>}
            </Link>
        </nav>
    )
}

export default Navbar
