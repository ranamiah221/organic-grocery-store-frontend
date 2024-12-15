import { Link } from "react-router-dom";
import ProductCategory from "../../components/ProductCategory/ProductCategory";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import useProduct from "../../Hooks/useProduct";


const Featured = () => {
    const [products]=useProduct();
    const featured = products.filter(product=> product.category ==='Featured')
    console.log(featured);
    return (
        <div className="my-5">
            <SectionHeader title={'Featured Products'}></SectionHeader>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
            {
                featured.slice(0,3).map((product)=> <ProductCategory key={product._id} product={product}></ProductCategory>)
             }
            </div>
           <div className="flex justify-center">
           <Link to='/products'><button className="btn btn-outline border-0 border-b-4 border-blue-400">See All Product</button></Link>
           </div>
        </div>
    );
};

export default Featured;