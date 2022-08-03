import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';

function ElevationScroll(props) {

    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


export default function Navbar(props) {
    const [totalItems,setTotalItems] = React.useState('')

    const[status,setStatus] = useState(false);

    useEffect(()=>{
            axios.get('/status').then(data=>{
            // console.log(data.data)
            setStatus(data.data)
        })
    },[])

    React.useEffect(() => {
        fetch("/cart").then(data => data.json()).then(myData => {
            setTotalItems(myData.length)
        })
        // console.log(totalItems)
    }, [])

    const [textData, setTextData]= useState("")
    const getSearchText= async (event) =>{
        setTextData(event.target.value)
    }
    
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ background: '#ffffff' }}>
                    <Toolbar>

                        <div className="container-fluid d-flex justify-content-between" >

                            <div>
                                <Link to= "/home">
                                    <h5 className="text-black">Sliver Store</h5>
                                </Link>
                            </div>

                            <div className='d-flex'>
                                {/* <form className="d-flex"  method='get' action='/products'> */}
                                    <input className="me-2" type="text" placeholder="Search" name='item' onChange={getSearchText}/>
                                    
                                    <Link to= {"/products?item="+ textData}>
                                        <button className="btn btn-success btn-sm" type="submit">
                                            <SearchIcon />
                                        </button>
                                    </Link>
                                    
                                {/* </form> */}

                            </div>

                            <div className="d-flex">

                                {/* Do not use 'href' to redirect page in react as it will refresh page every time we redirect the page. */}
                                {/* Use 'Link' instead as it will not refresh our page on redirect. */}
                                <Link to="/cart">
                                    <button type="button" className="btn btn-outline-primary btn-sm me-2">


                                        <Tooltip
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Cart"
                                        >
                                            <Badge badgeContent={totalItems} color="secondary">
                                                <ShoppingCartOutlinedIcon />
                                            </Badge>
                                        </Tooltip>
                                    </button>
                                </Link>


                                <Link to= "/profile">
                                    <button type="button" className="btn btn-outline-warning btn-sm me-2">
                                        <Tooltip
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="My Profile"
                                        >
                                            <AccountCircleOutlinedIcon />
                                        </Tooltip>
                                    </button>
                                </Link>

                                {!status && <Link to= "/">
                                    <button type="button" className="btn btn-outline-success btn-sm me-2">
                                        <Tooltip
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Login"
                                        >
                                            <LoginIcon />
                                        </Tooltip>
                                    </button>
                                </Link>}

                                

                                {status && <form action='/logout' method='post'>
                                    <button type="submit" className="btn btn-outline-danger btn-sm">
                                        <Tooltip
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="Log Out"
                                        >
                                            <PowerSettingsNewIcon />
                                        </Tooltip>
                                    </button>
                                </form>}
                                

                            </div>

                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

        </React.Fragment>
    );
}
