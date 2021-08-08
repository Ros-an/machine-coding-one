import React from 'react';
import {useCartContext} from "../../CartContext";

function OrderDetails() {
    const {cart} = useCartContext();
    const itemPrice = (acc, currVal) => {
        return acc + currVal.price*currVal.quantity
    }
    const discount = (acc, currVal) => {
        const off = currVal.price*(currVal.discount/100)*currVal.quantity;
        return acc + off;
    }
    return (
        <div className="order">
            <h2>Order Details</h2>
            <p className="price">
                <span>Price({cart.length} item)</span>
                <span>Rs. {`${cart.reduce(itemPrice, 0)}`}</span>
            </p>
            <p className="discount">
                <span>Discount</span>
                <span>{`- Rs. ${Math.floor(cart.reduce(discount, 0))}`}</span>
            </p>
            <h3 className="total">
                <span>Total</span>
                <span>{`Rs. ${cart.reduce(itemPrice, 0) - Math.floor(cart.reduce(discount, 0))}`}</span>
            </h3>
        </div>
    )
}

export default OrderDetails
