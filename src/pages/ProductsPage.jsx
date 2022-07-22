import React from 'react'
import Navbar from '../components/Common_Components/Navbar'
import Products from '../components/ProductsPage/Products'
import Footer from '../components/Common_Components/Footer'
import News from '../components/Common_Components/News'
const ProductsPage = () => {
    return (
        <div className='dark-bg'>
            <Navbar></Navbar>
            <News></News>

            <Products
                heading= "Dresses"
            ></Products>

            <div className='pt-5'></div>
            
            <Footer></Footer>
        </div>
    )
}

export default ProductsPage