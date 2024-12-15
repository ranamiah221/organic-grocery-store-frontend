import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import AddProduct from '../pages/AddProduct/AddProduct';
import Products from '../pages/Products/Products';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import MyCart from '../pages/MyCart/MyCart';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:8000/products/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
            ,
            {
                path:'/my-cart',
                element:<MyCart></MyCart>,
                
            }


        ]
    }
])

export default Routes;