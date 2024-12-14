import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import AddProduct from '../pages/AddProduct/AddProduct';
import Products from '../pages/Products/Products';

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
            }

        ]
    }
])

export default Routes;