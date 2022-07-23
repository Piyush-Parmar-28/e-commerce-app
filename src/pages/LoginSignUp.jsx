import React, { Fragment, useState } from 'react'
import Navbar2 from '../components/Common_Components/Navbar2'
import Login from "../components/Forms/Login"
import SignUp from '../components/Forms/SignUp'

const LoginSignUp = () => {

    const [state, setState] = useState("SignUp")

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