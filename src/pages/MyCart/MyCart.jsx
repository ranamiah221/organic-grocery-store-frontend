import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider/AuthProvider";
import CoverPage from "../../components/CoverPage/CoverPage";
import TableRow from "../../components/TableRow/TableRow";

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

  return (
    <div>
      <CoverPage title={"My Carts"}></CoverPage>
      <div className="overflow-x-auto my-10">
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
                carts.map(cart=><TableRow key={cart._id} cart={cart}></TableRow>)
            }
            
          </tbody> 
        </table>
      </div>
    </div>
  );
};

export default MyCart;
