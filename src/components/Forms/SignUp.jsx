import React from 'react'
import PageTitle from "../Common_Components/PageTitle"

const SignUp = (props) => {
    return (
        <main>
            <section className="card-block dark-bg">
                <div className="container">

                    <PageTitle
                        title="Sign Up"
                        desc="Sign Up to proceed..."
                    ></PageTitle>

                    {/* In forms, name filed is very Important, because it is used in 'req.body.' while connecting to database */}
                    <form method="post" className="card-style" action="/signUp">

                        <div className="row">
                            <div className="col">
                                <div className="mb-3"><label className="form-label" ><strong>First Name</strong></label><input className="form-control" type="text" id="first_name" placeholder="John" name="first_name" /></div>
                            </div>
                            <div className="col">
                                <div className="mb-3"><label className="form-label" ><strong>Last Name</strong></label><input className="form-control" type="text" id="last_name" placeholder="Doe" name="last_name" /></div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><b>Email</b></label>
                            <input className="form-control item" type="email" id="email" name="Email" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><b>Password</b></label>
                            <input className="form-control item" type="password" id="password" name="Password" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><b>Phone Number</b></label>
                            <input className="form-control item" type="tel" id="phone" name="Phone" />
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3"><label className="form-label"><strong>City</strong></label><input className="form-control" type="text" id="city" placeholder="Los Angeles" name="City" /></div>
                            </div>
                            <div className="col">
                                <div className="mb-3"><label className="form-label" ><strong>Country</strong></label><input className="form-control" type="text" id="country" placeholder="USA" name="Country" /></div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><strong>Address</strong></label>

                            <input className="form-control" type="text" id="address" placeholder="Sunset Valley, 38" name="Address" />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Sign Up</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <p className="align-middle my-0 me-2">Already have an account?</p>
                            <button className="btn btn-success btn-sm" type="submit" onClick={props.changeStateFunc}>Login</button>
                        </div>
                    </form>

                </div>
            </section>
        </main>

    )
}

export default SignUp