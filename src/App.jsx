import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SelectedProduct from "./pages/SelectedProduct";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart"
import ProfilePage from "./pages/ProfilePage";
import UpdateInfo from "./pages/UpdateInfo";
import AddProducts from "./components/Forms/AddProducts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginSignUp />} />
                <Route exact path="/add" element={<AddProducts />} />
                <Route exact path="home" element={<Home />} />
                <Route exact path="products" element={<ProductsPage />} />
                <Route exact path="selected" element={<SelectedProduct />} />
                <Route exact path="cart" element={<Cart />} />
                <Route exact path="profile" element={<ProfilePage />} />
                <Route exact path="update" element={<UpdateInfo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
