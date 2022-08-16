import React, { Fragment } from "react";

// import Navbar from '../components/Common_Components/Navbar'
import Navbar2 from '../components/Common_Components/Navbar2'
import Section from "../components/section/section";
import Productss from "../components/productsPage2/products";
const ProductsPage = () => {
    return (
        <Fragment>
            <Section>
                <Navbar2></Navbar2>
                <Productss />
            </Section>
        </Fragment>
    );
};

export default ProductsPage;
