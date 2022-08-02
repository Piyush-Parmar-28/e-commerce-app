import React, { useState } from 'react'
import {useNavigate} from  'react-router-dom'

import PageTitle from "../Common_Components/PageTitle"

const Login = (props) => {
    const navigate= useNavigate();

    const [loginDetails, setLoginDetails]= useState({
        Email: "",
        Password: ""
    })

    const handleInputs= (event) =>{
        setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value })
        // console.log(loginDetails);
    }

    const postData= async (event)=>{
        event.preventDefault();

        //  Writing object destructuring for: const Email= loginDetails.Email
        const {Email, Password}= loginDetails

        const res= await fetch("/login", {
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

        const data= await res.json()

        console.log("Data is: "+ JSON.stringify(data));

        if (data.status === 401) {
            window.alert("Invalid Credentials!")
        }
        else{
            window.alert("Login Successful!")
            console.log("Login Success");
            navigate("/home")
        }
    }

    return (
        <main >
            <section className="card-block dark-bg" style={{ height: '100vh', paddingTop: '5%' }} >
                <div className="container">

                    <PageTitle
                        title="Log In"
                        desc="Log In to continue..."
                    ></PageTitle>

                    <form className="card-style" method="post">
                        <div className="mb-3">
                            <label className="form-label" ><b>Email</b></label>
                            <input className="form-control item" type="email" id="email" name="Email" required onChange={handleInputs} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><b>Password</b></label>
                            <input className="form-control" type="password" id="password" name="Password" required onChange={handleInputs} />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit" onClick={postData}>Login</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <p className="align-middle my-0 me-2">Don't have an account?</p>
                            <button className="btn btn-success btn-sm" type="submit" onClick={props.changeStateFunc}>Sign Up</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>

    )
}

export default Login