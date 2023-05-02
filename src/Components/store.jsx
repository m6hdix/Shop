import React, { useContext } from 'react';
import {ContextProvider} from '../Context/ProductContext';
import ProductCard from './ProductCart';

export default function StorePage() {
    const products =useContext(ContextProvider)
    
    return (
        <div>
       { products.map(product=><ProductCard Product={product}/>  )}
        </div>
    )
}