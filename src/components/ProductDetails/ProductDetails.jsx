import { useLoaderData } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";

const ProductDetails = () => {
  const product = useLoaderData();
  const { product_name, product_image,description, rating, price } = product;
  const handleCart =()=>{
    
  }
  return (
    <>
    <div className="flex items-center gap-5 bg-base-100 shadow-xl mt-3">
      <div className="w-1/2">
      <img
          src={product_image}
          className="h-[350px] w-full"
          alt="Album"
        />
      </div>
      <div className="space-y-2">
        <h2 className='text-2xl font-bold'>{product_name}</h2>
        <p className="text-base font-normal">{description}</p>
        <p>Price: <span className="text-base font-medium">${price}</span></p>
         <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
        <div className="card-actions justify-end">
          <button onClick={handleCart} className="btn bg-green-500">Add To Cart</button>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default ProductDetails;
