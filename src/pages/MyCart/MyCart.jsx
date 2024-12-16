import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import CoverPage from "../../components/CoverPage/CoverPage";
import TableRow from "../../components/TableRow/TableRow";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/carts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      });
  }, [user]);

  const handleDeleteCart = (id) => {
    fetch(`http://localhost:8000/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.deletedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Cart Deleted successfully",
            icon: "success",
          });
          const remaining = carts.filter(cart => cart._id !==id)
          setCarts(remaining)
        }
      });
  };

  return (
    <div>
      <CoverPage title={"My Carts"}></CoverPage>
      {
        carts.length === 0 ? 
        <div className="flex justify-center items-center h-52">
                <h1 className="text-4xl font-bold">No Cart Found</h1>
        </div>
        : <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                carts.map(cart=><TableRow key={cart._id} cart={cart} handleDeleteCart={handleDeleteCart}></TableRow>)
            }
            
          </tbody> 
        </table>
      </div>
      }
    </div>
  );
};

export default MyCart;
