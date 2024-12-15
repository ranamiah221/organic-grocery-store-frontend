import CoverPage from '../../components/CoverPage/CoverPage';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import useProduct from './../../Hooks/useProduct';


const Products = () => {
    const [products]=useProduct();
    return (
        <section>
             <CoverPage title={'All Products'}></CoverPage>
            <div className='grid grid-cols-3 gap-5 my-10'>
            {
                products.map((product, idx)=> <ProductCategory key={idx} product={product}></ProductCategory>)
             }
            </div>
        </section>
    );
};

export default Products;