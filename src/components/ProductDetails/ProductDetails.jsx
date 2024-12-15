import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const {user}= useContext(AuthContext)
 const email= user.email;
  const product = useLoaderData();
  const { product_name, product_image,description, rating, price, category } = product;
 
  const handleCart =()=>{
    const cart = {email, product_name, product_image, rating, description, rating,price, category}
    fetch('http://localhost:8000/carts',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(cart)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.insertedId){
        Swal.fire({
          title: "Good job!",
          text: "Cart added successfully",
          icon: "success"
        });
      }
    })
  }
  return (
    <>
    <div className="flex items-center gap-5 bg-base-100 shadow-xl my-5">
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
