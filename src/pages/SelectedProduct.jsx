import React from 'react'
import Navbar2 from '../components/Common_Components/Navbar2'
import News from '../components/Common_Components/News'
import ProductInfo from '../components/SelectedProduct/ProductInfo'

const SelectedProduct = () => {
    return (
        <div className='white-bg'>
            <Navbar2></Navbar2>
            <News></News>
            <ProductInfo></ProductInfo>
        </div>
    )
}

export default SelectedProduct