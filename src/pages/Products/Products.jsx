import CoverPage from '../../components/CoverPage/CoverPage';
import useProduct from './../../Hooks/useProduct';


const Products = () => {
    const [products]=useProduct();
    return (
        <section>
             <CoverPage title={'All Products'}></CoverPage>
             
        </section>
    );
};

export default Products;