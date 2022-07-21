import React from 'react'
import Navbar from '../components/Common_Components/Navbar'
import Products from '../components/ProductsPage/Products'
import Footer from '../components/Common_Components/Footer'
import News from '../components/Common_Components/News'
const ProductsPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <News></News>

            <Products
                heading= "Dresses"
            ></Products>
            
            <Footer></Footer>
        </div>
    )
}

export default ProductsPage