import React, { useState } from 'react'
import LoginNavbar from '../components/Common_Components/LoginNavbar'
import Login from "../components/Forms/Login"
import SignUp from '../components/Forms/SignUp'
import Footer from "../components/Common_Components/Footer"

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

            <Footer></Footer>
        </div>
    )
}

export default LoginSignUp