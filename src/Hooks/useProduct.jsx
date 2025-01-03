import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const useProduct = () => {
    const [products, setProducts ]= useState([])
    useEffect(()=>{
    fetch('http://localhost:8000/products')
    .then(res => res.json())
    .then(data=> {
        setProducts(data)
    })
    },[])
    return [products]
};

export default useProduct;