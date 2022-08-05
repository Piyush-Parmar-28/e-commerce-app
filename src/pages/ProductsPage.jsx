import React, { Fragment } from "react";

// import Navbar from '../components/Common_Components/Navbar'
import Navbar2 from '../components/Common_Components/Navbar2'
import Products from "../components/ProductsPage/Products";
import Section from "../newComponents/section/section";
import Productss from "../newComponents/productsPage/products";
const ProductsPage = () => {
    return (
        <Fragment>
            <Section>
                <Navbar2></Navbar2>
                <Products />
            </Section>
        </Fragment>
    );
};

export default ProductsPage;
