import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useProduct from "../../Hooks/useProduct";
import ProductCategory from "../../components/ProductCategory/ProductCategory";


const Popular = () => {
    const [products]=useProduct();
    const popular = products.filter(product=> product.category ==='Popular')
    return (
        <div className="my-5">
            <SectionHeader title={'Popular Products'}></SectionHeader>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
            {
                popular.slice(0,3).map((product)=> <ProductCategory key={product._id} product={product}></ProductCategory>)
             }
            </div>
           <div className="flex justify-center">
           <Link to='/products'><button className="btn btn-outline border-0 border-b-4 border-blue-400">See All Product</button></Link>
           </div>
        </div>
    );
};

export default Popular;