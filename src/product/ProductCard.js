import React from 'react'
import {useCartContext} from "../CartContext";
import {priceAfterDiscount} from "../util";
function ProductCard({product}) {
    const {cart, dispatch} = useCartContext();
    
    const addToCart = (item) => {
        console.log("add")
        dispatch({type: "ADD_ITEM_TO_CART", payload: item});
    }
    let presentInCart = cart.some(item => item.id === product.id);
    return (
        <article>
            <img src={product.imgurl} alt={product.title}/>
            <div className="details">
                <p style={{color: "gray"}}>{product.brand}</p>
                <p className="title">{product.title}</p>
                <p className="price">Rs. {priceAfterDiscount(product.price, product.discount)} <small className="original-price">
                Rs.{product.price}</small>
                <small className="discount">{`${product.discount}% off`}</small></p>
            </div>
            <button onClick={()=> addToCart(product)} disabled={presentInCart}
            style={{cursor: presentInCart && "not-allowed"}}
            >{presentInCart ?  "ADDED": "ADD TO CART"}</button>
        </article>
    )
}

export default ProductCard
