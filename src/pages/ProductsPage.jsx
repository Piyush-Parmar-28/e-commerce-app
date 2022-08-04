import React, { Fragment } from "react";

// import Navbar from '../components/Common_Components/Navbar'
import NavBar from "../newComponents/nevbar/navbar";
import Products from "../components/ProductsPage/Products";
import Section from "../newComponents/section/section";
import Productss from "../newComponents/productsPage/products";
const ProductsPage = () => {
    return (
        <Fragment>
            <Section>
                <NavBar></NavBar>
                <Productss />
            </Section>
        </Fragment>
    );
};

export default ProductsPage;
