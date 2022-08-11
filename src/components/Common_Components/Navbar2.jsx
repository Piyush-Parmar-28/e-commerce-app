import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LoginIcon from "@mui/icons-material/Login";

export default function Navbar2(props) {
    const [totalItems, setTotalItems] = React.useState("");

    const [status, setStatus] = useState(false);
    const [fname, setfname] = useState("Profile");

    useEffect(() => {
        axios.get("/status").then((data) => {
            // console.log(data.data)
            setStatus(data.data.status);
            setfname(data.data.fname);
        });
    }, []);

    useEffect(() => {
        fetch("/cart")
            .then((data) => data.json())
            .then((myData) => {
                setTotalItems(myData.length);
            });
        // console.log(totalItems)
    }, []);

    const [textData, setTextData] = useState("");
    const getSearchText = async (event) => {
        setTextData(event.target.value);
    };

    function getProducts(){
        window.location.href = `/products?item=${textData}`
    }

    return (
        <div className="my-navbar d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <img src='/img/logo.png' id="logo-img" style={{ width: '2rem', marginLeft: '1rem', marginRight: '1rem' }} />
                <Link to="/home" id="logo">
                    <h5 id="text">Sliver Store</h5>
                </Link>
            </div>

            <div className="d-flex" id="search_input">
                <input
                    id="search_input"
                    className="me-2"
                    type="text"
                    placeholder="Search anything..."
                    name="item"
                    onChange={getSearchText}
                />

                    <button className="btn-icon btn-xsmall" type="submit" onClick={getProducts}>
                        <SearchIcon />
                    </button>
            </div>

            <div className="d-flex">
                {/* Do not use 'href' to redirect page in react as it will refresh page every time we redirect the page. */}
                {/* Use 'Link' instead as it will not refresh our page on redirect. */}
                <div className="d-flex justify-content-center align-items-center me-2">
                    <label className="me-2" id="cart">
                        <b>Cart</b>
                    </label>

                    <Link to="/cart" id="cart_icon">
                        <p className="badge">{totalItems}</p>

                        <button type="button" className="btn-icon btn-xsmall me-2">
                            <ShoppingCartOutlinedIcon />
                        </button>
                    </Link>
                </div>

                <div className="d-flex justify-content-center align-items-center ms-2">
                    <label id="profile">
                        <b>{fname ? fname : "Profile"}</b>
                    </label>

                    <button
                        type="button"
                        className="btn-icon btn-xsmall me-2"
                        id="profile_icon"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <AccountCircleOutlinedIcon />
                    </button>
                    <div
                        className="dropdown-menu"
                        style={{ marginRight: "40px", marginTop: '0.5rem' }}
                        aria-labelledby="profile_icon"
                    >
                        <Link to="/profile" className="text-decoration-none">
                            <p className="dropdown-item text-black">
                                Profile
                            </p>
                        </Link>

                        <Link to="/cart" className="text-decoration-none">
                            <p className="dropdown-item text-black">
                                Cart
                            </p>
                        </Link>
                        <Link to="/home" className="text-decoration-none">
                            <p className="dropdown-item text-decor text-black">
                                Home
                            </p>
                        </Link>

                        <form action="/logout" method="post">
                            <button className="dropdown-item font-weight-bold" type="submit">
                                Logout
                            </button>
                        </form>
                    </div>
                </div>

                <div className="ms-2" id="logout_icon">
                    {!status && (
                        <Link to="/">
                            <button
                                type="button"
                                className="btn-icon btn-xsmall btn-bg-green me-2"
                            >
                                <LoginIcon />
                            </button>
                        </Link>
                    )}

                    {status && (
                        <form action="/logout" method="post">
                            <button type="submit" className="btn-icon btn-xsmall btn-bg-red">
                                <PowerSettingsNewIcon />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
