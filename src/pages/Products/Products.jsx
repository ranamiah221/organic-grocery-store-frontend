import { useState } from "react";
import CoverPage from "../../components/CoverPage/CoverPage";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import useProduct from "./../../Hooks/useProduct";

const Products = () => {
  const [products] = useProduct();
  const [isShow, setIsShow] = useState(true);
  return (
    <section>
      <CoverPage title={"All Products"}></CoverPage>
      <div className="grid grid-cols-3 gap-5 my-10">
        {isShow ? (
          <>
           {
                products.slice(0,6).map((product)=> <ProductCategory key={product._id} product={product}></ProductCategory>)
             }
          </>
        ) : (
          <>
            {products.map((product) => (
              <ProductCategory
                key={product._id}
                product={product}
              ></ProductCategory>
            ))}
          </>
        )}
      </div>
      <div className="flex justify-center items-center mb-10">
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn btn-outline border-0 border-b-4 hover:bg-blue-300 border-blue-400"
        >
          {isShow ? "Show All Product" : "Show Less Product"}
        </button>
      </div>
    </section>
  );
};

export default Products;
