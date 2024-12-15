import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ProductCategory = ({ product }) => {
  const {product_id, product_name, product_image, rating, price } = product;
  return (
    <div className="card bg-base-100 w-full p-5 shadow-xl">
      <div className="">
      <img className="h-[200px] w-full mb-5" src={product_image} alt="Shoes" />
      </div>      
      
        <h2 className="text-2xl font-bold">{product_name}</h2>
        <p className="text-base">
          Price: <span className="font-bold">${price}</span>
        </p>

        <div className="card-actions flex justify-between items-center">
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <Link><button className="btn btn-outline">View Details</button></Link>
        </div>
    
    </div>
  );
};

export default ProductCategory;
