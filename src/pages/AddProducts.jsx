import React, { Fragment } from 'react'

import ProductsForm from "../components/Forms/ProductsForm"
import Footer from '../components/Common_Components/Footer'

const AddProducts = () => {
    return (

        // Fragment just wraps our code
        //  It is used to remove unnecessary divs
        <Fragment>
            <ProductsForm></ProductsForm>
            <Footer></Footer>
        </Fragment>
    )
}

export default AddProducts