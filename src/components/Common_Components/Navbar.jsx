import * as React from 'react';
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
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ background: '#ffffff' }}>
                    <Toolbar>

                        <div className="container-fluid d-flex justify-content-between" >

                            <div>
                                <a className="navbar-brand text-black" href="/home">Sliver Store</a>
                            </div>

                            <div>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-success btn-sm" type="submit">
                                        <SearchIcon />
                                    </button>
                                </form>

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
                                            <Badge badgeContent={7} color="secondary">
                                                <ShoppingCartOutlinedIcon />
                                            </Badge>
                                        </Tooltip>
                                    </button>
                                </Link>


                                <Link to= "/profile">
                                    <button type="button" className="btn btn-outline-danger btn-sm">
                                        <Tooltip
                                            TransitionComponent={Fade}
                                            TransitionProps={{ timeout: 600 }}
                                            title="My Profile"
                                        >
                                            <AccountCircleOutlinedIcon />
                                        </Tooltip>
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

        </React.Fragment>
    );
}
