import React from 'react'

import Navbar from '../components/Common_Components/Navbar'
import ProductsForm from "../components/Forms/ProductsForm"
import Footer from '../components/Common_Components/Footer'

const AddProducts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductsForm></ProductsForm>
            <Footer></Footer>
        </div>
    )
}

export default AddProducts