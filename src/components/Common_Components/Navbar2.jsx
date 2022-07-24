import * as React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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


export default function Navbar2(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar style={{ background: '#ffffff' }}>
                    <Toolbar>

                        <div className="container-fluid d-flex justify-content-center" >
                            <Link to="/">
                                <h5 className="text-black">Sliver Shop</h5>
                            </Link>
                        </div>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

        </React.Fragment >
    );
}
