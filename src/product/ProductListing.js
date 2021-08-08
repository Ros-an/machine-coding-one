import React from 'react'
import * as products from "../product-data.json";
import ProductCard from "./ProductCard";
import "./ProductListing.css";
// console.log("roshan", products.data);


function ProductListing() {

    return (
        <section>
            {products.data.map(item => <ProductCard product={item}  key={item.id}/>)}
        </section>
    )
}

export default ProductListing



