import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./common_CSS/backgrounds.css"
import "./common_CSS/web_masters_home.css"
import "./common_CSS/modal.css"
import "./common_CSS/forms.css"
import "./common_CSS/fonts_colors.css"
import "./common_CSS/table.css"
import "./common_CSS/navbar.css"
import "./common_CSS/button.css"
import "./common_CSS/box.css"

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SelectedProduct from "./pages/SelectedProduct";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart"
import ProfilePage from "./pages/ProfilePage";
import UpdateInfo from "./pages/UpdateInfo";
import Footer from "./components/Common_Components/Footer";
import AddProducts from "./pages/AddProducts";
import WebMasters from "./newComponents/WebMasters/webMasters";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LoginSignUp />} />
                    <Route exact path="add" element={<AddProducts />} />
                    <Route exact path="home" element={<Home />} />
                    <Route exact path="products" element={<ProductsPage />} />
                    <Route exact path="selected" element={<SelectedProduct />} />
                    <Route exact path="cart" element={<Cart />} />
                    <Route exact path="profile" element={<ProfilePage />} />
                    <Route exact path="update" element={<UpdateInfo />} />
                    <Route exact path="webmasters" element={<WebMasters />} />
                </Routes>
            </BrowserRouter>
            
            <Footer />
        </Fragment>
    )
}

export default App;
