import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [totalItems, setTotalItems] = React.useState("");

    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios.get("/status").then((data) => {
            // console.log(data.data)
            setStatus(data.data);
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

    function logout() {
        fetch('/logout', {
            method: 'post'
        })
        window.location.href = '/'
    }

    return (
        <header className={style.header}>
            <div className={style.logo_div}>
                <a className={style.a}>Silver Store</a>
            </div>
            <div className={style.search_div}>
                <input
                    className={style.input}
                    onChange={getSearchText}
                    placeholder="Search products,Brands etc..."
                ></input>
                <div className={style.button_div}>
                    <Link to={"/products?item=" + textData}>
                        <button style={{ border: "none", background: "none" }}>
                            <span>
                                <svg fill="currentColor">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={style.navigation_div}>
                <a className={style.a2}>
                    <span>
                        <svg fill="currentColor">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </span>
                    Cart
                    {status && <span className={style.cart_span}>{totalItems}</span>}
                </a>
                <a className={style.a2}>
                    <span>
                        <svg fill="currentColor">
                            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                        </svg>
                    </span>
                    Orders
                </a>
                {status ? (
                    <a className={style.a2} onClick={logout}>
                        <span>
                            <svg fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                />
                            </svg>
                        </span>
                        Logout
                    </a>
                ) : (
                    <Link to='/' className={style.a2}>
                        <a >
                            <span>
                                <svg fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                                    />
                                </svg>
                            </span>
                            Login
                        </a>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default NavBar;
