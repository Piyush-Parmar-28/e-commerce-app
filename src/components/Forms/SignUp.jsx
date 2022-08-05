import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import PageTitle from "../Common_Components/PageTitle"

const SignUp = (props) => {
    const navigate= useNavigate()

    const [signUpDetails, setSignUpDetails] = useState({
        first_name: "",
        last_name: "", 
        Email: "", 
        Password: "",
        Phone: "",
        City: "",
        Country: "",
        Address: ""
    })

    function handleChange(event) {
        setSignUpDetails( {...signUpDetails, [event.target.name]: event.target.value} )
        // console.log(signUpDetails);
    }

    const postData= async (event) =>{
        event.preventDefault()

        //  Using object destructuring for first_name: signUpDetails.first_name
        const {first_name, last_name, Email, Password, Phone, City, Country, Address}= signUpDetails

        const res= await fetch("/signUp", {
            method:"post",
            headers: {
                "Content-Type": "application/json"
            }, 

            //  Converting the response to string, since our backend can only understand string
            //  The string will be sent as body to the server
            body: JSON.stringify({
                // Using object destructuring for: first_name: first_name
                first_name, last_name, Email, Password, Phone, City, Country, Address
            })
        })

        const data = await res.json()

        if (data.status === 200) {
            window.alert("SignUp Successful!\nLogin To Continue.")
            navigate("/")
        }
        else{
            window.alert("SignUp Error! Try Again.")
        }
    }

    return (
        <main>
            <section className="extra-padding dark-bg">
                <div className="container">

                    <PageTitle
                        title="Sign Up"
                        desc="Sign Up to proceed..."
                    ></PageTitle>

                    {/* In forms, name filed is very Important, because it is used in 'req.body.' while connecting to database */}
                    <form method="post" className="form-style">

                        <div className="row">
                            <div className="col d-flex flex-column">
                                <div className="mb-3"><label><strong>First Name</strong></label>
                                    <input type="text" id="first_name" placeholder="John" name="first_name" onChange= {handleChange}/>
                                </div>
                            </div>

                            <div className="col d-flex flex-column">
                                <div className="mb-3"><label><strong>Last Name</strong></label>
                                    <input type="text" id="last_name" placeholder="Doe" name="last_name" onChange= {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <label><b>Email</b></label>
                            <input className=" item" type="email" id="email" name="Email" onChange= {handleChange}/>
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <label><b>Password</b></label>
                            <input className="item" type="password" id="password" name="Password" onChange= {handleChange}/>
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <label><b>Phone Number</b></label>
                            <input className="item" type="tel" id="phone" name="Phone" onChange= {handleChange}/>
                        </div>

                        <div className="row">
                            <div className="col d-flex flex-column">
                                <div className="mb-3"><label><strong>City</strong></label>
                                    <input type="text" id="city" placeholder="Los Angeles" name="City" onChange= {handleChange}/>
                                </div>
                            </div>

                            <div className="col d-flex flex-column">
                                <div className="mb-3"><label><strong>Country</strong></label>
                                    <input type="text" id="country" placeholder="USA" name="Country" onChange= {handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <label><strong>Address</strong></label>
                            <input type="text" id="address" placeholder="Sunset Valley, 38" name="Address" onChange= {handleChange}/>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn-normal" type="submit" onClick={postData}>Sign Up</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <p className="align-middle my-0 me-2">Already have an account?</p>

                            <button className="btn-normal" type="submit" onClick={props.changeStateFunc} style={{background:'#656565'}}>Login</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>

    )
}

export default SignUp