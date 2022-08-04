import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/forms.css"
import "./css/navbar.css"
import "./css/button.css"
import "./css/box.css"
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SelectedProduct from "./pages/SelectedProduct";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart"
import ProfilePage from "./pages/ProfilePage";
import UpdateInfo from "./pages/UpdateInfo";
import Footer from "./components/Common_Components/Footer";
import AddProducts from "./pages/AddProducts";
import Get from "./pages/Get"

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LoginSignUp />} />
                    <Route exact path="add" element={<AddProducts />} />
                    <Route exact path="get" element={<Get />} />
                    <Route exact path="home" element={<Home />} />
                    <Route exact path="products" element={<ProductsPage />} />
                    <Route exact path="selected" element={<SelectedProduct />} />
                    <Route exact path="cart" element={<Cart />} />
                    <Route exact path="profile" element={<ProfilePage />} />
                    <Route exact path="update" element={<UpdateInfo />} />
                </Routes>
            </BrowserRouter>
            
            <Footer />
        </Fragment>
    )
}

export default App;
