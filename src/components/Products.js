import React, { useState, useEffect } from 'react'
import "./products.css";
import OneProductCard from './OneProductCard';

export default function Products() {

    const [isLoading, setIsLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);

    var url = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(
                (result) => {
                    console.log(result);
                    setAllProducts(result);
                    setIsLoading(false);
                }
            )
    }, [isLoading]);


    if (isLoading) {
        return (
            <div className='loadingContainer'>
                Is Loading
            </div>
        )
    }
    else {
        return (
            <div className='allProductsContainer'>
                {
                    allProducts.map(product => (
                        <OneProductCard
                            title = {product.title}
                            image = {product.image}
                            price = {product.price}
                            key = {product.id}
                        />
                    ))
                }
            </div>
        );
    }

}
