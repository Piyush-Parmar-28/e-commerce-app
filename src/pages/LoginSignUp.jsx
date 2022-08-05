import React, { Fragment, useState,useEffect } from 'react'
import Navbar2 from '../components/Common_Components/Navbar2'
import Login from "../components/Forms/Login"
import SignUp from '../components/Forms/SignUp'
import axios from 'axios';
const LoginSignUp = () => {

    const [state, setState] = useState("SignUp")
    const[status,setStatus] = useState(false);

    useEffect(()=>{
            axios.get('/status').then(data=>{
            console.log(data.data)
            setStatus(data.data.status)
        })
    },[])

    if(status) window.location.href = '/home';

    const changeState = () => {
        if (state === "SignUp") {
            setState("Login")
        }

        else {
            setState("SignUp")
        }
    }

    return (
        <Fragment>
            <Navbar2></Navbar2>
            {state === "SignUp" ? <Login changeStateFunc={changeState}></Login> : <SignUp changeStateFunc={changeState}></SignUp>}

        </Fragment>
    )
}

export default LoginSignUp