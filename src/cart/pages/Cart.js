import React from 'react'
import {useCartContext} from "../../CartContext";
import CartCard from "../components/CartCard";
import OrderDetails from '../components/OrderDetails';
import "./Cart.css";
function Cart() {
    const {cart, saveForLater} = useCartContext();
    return (
        <section className="cart-page">
            <div className="cart-section">
               <div className="cart-item">
               {cart.map(item=> <CartCard product={item} indicator={true} required={true}  key={item.id}/>)}  
                </div> 
                <div className="saved-item">
                    <p className="heading">Saved({saveForLater.length})</p>
                    {saveForLater.map(item=> <CartCard product={item} indicator={false} required={false}  key={item.id}/>)}
                </div>
            </div>
            <div className="calculation-section">
                <OrderDetails/>
            </div>
        </section>
    )
}

export default Cart
