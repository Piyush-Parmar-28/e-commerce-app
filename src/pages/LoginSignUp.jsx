import React, { Fragment, useState } from 'react'
import LoginNavbar from '../components/Common_Components/LoginNavbar'
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
        <div>
            <LoginNavbar></LoginNavbar>
            {state === "SignUp" ? <Login changeStateFunc={changeState}></Login> : <SignUp changeStateFunc={changeState}></SignUp>}

        </div>
    )
}

export default LoginSignUp