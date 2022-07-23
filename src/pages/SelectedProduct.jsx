import React from 'react'
import Navbar from '../components/Common_Components/Navbar'
import News from '../components/Common_Components/News'
import ProductInfo from '../components/SelectedProduct/ProductInfo'

const SelectedProduct = () => {
    return (
        <div className='white-bg'>
            <Navbar></Navbar>
            <News></News>
            <ProductInfo></ProductInfo>
        </div>
    )
}

export default SelectedProduct