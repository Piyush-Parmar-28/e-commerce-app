import { height, maxHeight } from '@mui/system'
import React from 'react'
import PageTitle from "../Common_Components/PageTitle"

const Login = (props) => {
    return (
        <main >
            <section className="card-block dark-bg" style={{height:'100vh',paddingTop:'5%'}} >
                <div className="container">

                    <PageTitle
                        title="Log In"
                        desc="Log In to continue..."
                    ></PageTitle>

                    <form id='myForm' className="card-style" action="/login" method="post">
                        <div className="mb-3">
                            <label className="form-label" ><b>Email</b></label>
                            <input className="form-control item" type="email" id="email" name="Email" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label"><b>Password</b></label>
                            <input className="form-control" type="password" id="password" name="Password" required />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Login</button>
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