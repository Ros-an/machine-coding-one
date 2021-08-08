import React from 'react'
import {priceAfterDiscount} from "../../util";
import {useCartContext} from "../../CartContext";

function CartCard({product, indicator, required}) {
    const {dispatch} = useCartContext();
    const updateQuantity = (id, flag)=> {
        if(flag){
            dispatch({type: "INCREASE", payload: id})
        }else {
            dispatch({type: "DECREASE", payload: id})
        }
    }
    const remove = (id, indicator) => {
        if(indicator){
            dispatch({type: "REMOVE_FROM_CART", payload: id})
        }else{
            dispatch({type: "REMOVE_FROM_SAVE", payload: id})
        }
    }
    const save = (item) => {
        dispatch({type: "SAVE_FOR_LATER", payload: item})
    }
    return (
        <div className="cart-card">
            <img src={product.imgurl} alt={product.title}/>
            <div className="details">
                <p style={{color: "gray"}}>{product.brand}</p>
                <p className="title">{product.title}</p>
                <p className="price">Rs. {priceAfterDiscount(product.price, product.discount)} <small className="original-price">
                Rs.{product.price}</small>
                <small className="discount">{`${product.discount}% off`}</small></p>
                <div className="quantity">
                    <button disabled={product.quantity === 1} onClick={()=> updateQuantity(product.id, false)}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick={()=> updateQuantity(product.id, true)}>+</button>
                </div>
                <div className="control-btn">
                <button className="remove" onClick={()=> remove(product.id, indicator)}>REMOVE</button>
                {required && 
                <button 
                className="save-for-later" 
                onClick={()=> save(product)}
                >
                    SAVE FOR LATER
                </button>}
                </div>
            </div>
        </div>
    )
}

export default CartCard
