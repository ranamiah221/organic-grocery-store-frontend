import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CoverPage from "../../components/CoverPage/CoverPage";

const AddProduct = () => {
    const [category, setCategory]=useState('')
    const navigate = useNavigate();
    const handleChange = (event) => {
      setCategory(event.target.value);
    };

    const handleAddProduct=(e)=>{
        e.preventDefault();
        const form = e.target;
        const product_name= form.product_name.value;
        const product_image= form.product_image.value;
        const rating= form.rating.value;
        const price= form.price.value;
        const description= form.description.value;
        const product ={product_name,product_image, rating, price, description, category};
       
        fetch('http://localhost:8000/products',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Product add to the product collection",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/products')
            }
        })
    }
  return (
    <>
    <CoverPage title={'Add Products'}></CoverPage>
     <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <form onSubmit={handleAddProduct} className="card-body">
        {/* product name and image */}
        <div className="flex items-center justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="product_name"
              placeholder="Product name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="text"
              name="product_image"
              placeholder="Product Image Url"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* rating and price */}
        <div className="flex items-center justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="1-5"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* category and description */}
        <div className="flex items-center justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
          <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select  onChange={handleChange}className="select select-info w-full ">
              <option disabled selected>
                Select category
              </option>
              <option value={'Popular'}>Popular</option>
              <option value={'Featured'}>Featured</option>
              <option value={'Sweet'}>Sweet</option>
              <option value={'Fruits'}>Fruits</option>
            </select>
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-outline border-0 hover:bg-blue-300 border-b-4 border-blue-500">Add Product</button>
        </div>
      </form>
    </div>
    </>
   
  );
};

export default AddProduct;
