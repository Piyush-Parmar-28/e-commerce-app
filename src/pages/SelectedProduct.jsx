import React from 'react'
import Navbar from '../components/Common_Components/Navbar'
import News from '../components/Common_Components/News'
import ProductInfo from '../components/SelectedProduct/ProductInfo'
import Footer from '../components/Common_Components/Footer'

const SelectedProduct = () => {
    return (
        <div>
            <Navbar></Navbar>
            <News></News>
            <ProductInfo></ProductInfo>
            <Footer></Footer>
        </div>
    )
}

export default SelectedProduct