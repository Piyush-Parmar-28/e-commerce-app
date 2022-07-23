import React, { Fragment } from 'react'

import Navbar2 from "../components/Common_Components/Navbar2"
import ProductsForm from "../components/Forms/ProductsForm"

const AddProducts = () => {
    return (

        //  Fragment just wraps our code.
        //  It is used to prevent unnecessary divs.

        <Fragment>
            <Navbar2></Navbar2>
            <ProductsForm></ProductsForm>
        </Fragment>
    )
}

export default AddProducts