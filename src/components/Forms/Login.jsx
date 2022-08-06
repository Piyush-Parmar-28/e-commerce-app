import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PageTitle from "../Common_Components/PageTitle"

const Login = (props) => {
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({
        Email: "",
        Password: ""
    })

    const [loginStatus, setLoginStatus] = useState({ state: 'Login', status: false })

    const handleInputs = (event) => {
        setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value })
        // console.log(loginDetails);
    }

    const postData = async (event) => {
        event.preventDefault();

        //  Writing object destructuring for: const Email= loginDetails.Email
        const { Email, Password } = loginDetails

        const res = await fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            // Since our backend will not understand JSON data & hence we must convert to string
            //  This string will be sent as 'body' to server
            body: JSON.stringify({
                //  Using object destructuring for: Email: Email
                Email, Password
            })
        })

        const data = await res.json()

        // console.log("Data is: " + JSON.stringify(data));

        if (data.status === 401) {
            setLoginStatus({ state: 'Invalid Credentials !' })

            //  Setting what to do after 2000ms time.
            setTimeout(() => {
                setLoginStatus({ state: 'Login' })
            }, 2000);
        }
        else {
            // Resetting the data after successful login
            setLoginDetails({
                Email: "",
                Password: ""
            })

            setLoginStatus({ state: 'Logged in successfully...', status: true })

            //  Setting what to do after 1500ms time.
            setTimeout(() => {
                navigate("/home")
            }, 1500);
        }
    }

    return (
        <main className="">
            <section className="extra-padding blue-bg" style={{ height: '100vh', paddingTop: '5%' }} >
                <div className="container">

                    <PageTitle
                        title="Log In"
                        desc="Log In to continue..."
                    ></PageTitle>

                    <form className="form-style" method="post">
                        <div className="mb-3 d-flex flex-column">
                            <label><b>Email</b></label>
                            <input type="email" id="email" name="Email" value={loginDetails.Email} required onChange={handleInputs} placeholder="johncarter@gmail.com" />
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <label><b>Password</b></label>
                            <input type="password" id="password" name="Password" value={loginDetails.Password} required onChange={handleInputs} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn-normal" type="submit" style={loginStatus.status ? { background: '#01966e' } : { background: '#e1775d' }} onClick={postData}>{loginStatus.state}</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <p className="align-middle my-0 me-2">Don't have an account?</p>

                            <button className="btn-normal btn-bg-grey" type="submit" onClick={props.changeStateFunc}>Sign Up</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>

    )
}

export default Login