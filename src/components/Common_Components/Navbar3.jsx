import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

// import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar3(props) {
    const [totalItems, setTotalItems] = React.useState('')

    const [status, setStatus] = useState(false);

    useEffect(() => {
        axios.get('/status').then(data => {
            // console.log(data.data)
            setStatus(data.data)
        })
    }, [])

    useEffect(() => {
        fetch("/cart").then(data => data.json()).then(myData => {
            setTotalItems(myData.length)
        })
        // console.log(totalItems)
    }, [])

    const [textData, setTextData] = useState("")
    const getSearchText = async (event) => {
        setTextData(event.target.value)
    }

    return (
        <div className="my-navbar d-flex justify-content-between align-items-center" >

            <div>
                <Link to="/home">
                    <h5 className="text-black">Sliver Store</h5>
                </Link>
            </div>

            <div className='d-flex'>
                <input className="me-2" type="text" placeholder="Search anything..." name='item' onChange={getSearchText} />

                <Link to={"/products?item=" + textData}>
                    <button className="btn-icon btn-xsmall" type="submit">
                        <SearchIcon />
                    </button>
                </Link>
            </div>

            <div className="d-flex">

                {/* Do not use 'href' to redirect page in react as it will refresh page every time we redirect the page. */}
                {/* Use 'Link' instead as it will not refresh our page on redirect. */}
                <div className='d-flex justify-content-center align-items-center'>
                    <label className='me-2'><b>Cart</b></label>

                    <Link to="/cart">
                        <p className='badge'>{totalItems}</p>

                        <button type="button" className="btn-icon btn-xsmall me-2">
                            {/* <Badge badgeContent={totalItems} color="secondary"> */}
                                <ShoppingCartOutlinedIcon />
                            {/* </Badge> */}
                        </button>
                    </Link>
                </div>

                <div className='d-flex justify-content-center align-items-center ms-2'>
                    <label><b>Profile</b></label>

                    <Link to="/profile">
                        <button type="button" className="btn-icon btn-xsmall me-2">
                            <AccountCircleOutlinedIcon />
                        </button>
                    </Link>
                </div>

                <div className='ms-2'>
                    {!status && <Link to="/">
                        <button type="button" className="btn-icon btn-xsmall btn-bg-green me-2">
                            <LoginIcon />
                        </button>
                    </Link>}

                    {status && <form action='/logout' method='post'>
                        <button type="submit" className="btn-icon btn-xsmall btn-bg-red">
                            <PowerSettingsNewIcon />
                        </button>
                    </form>}
                </div>

            </div>

        </div >

    );
}
