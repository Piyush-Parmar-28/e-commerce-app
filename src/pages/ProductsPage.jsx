import React, { Fragment } from "react";

// import Navbar from '../components/Common_Components/Navbar'
import NavBar from "../newComponents/NavBar/navbar";
import Products from "../components/ProductsPage/Products";
import Section from "../newComponents/NavBar/section/section";
const ProductsPage = () => {
  return (
    <Fragment>
        <Section>
        <NavBar></NavBar>
        </Section>

      <div className="dark-bg">
        <Products heading="Dresses"></Products>

        <div className="pt-5"></div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
