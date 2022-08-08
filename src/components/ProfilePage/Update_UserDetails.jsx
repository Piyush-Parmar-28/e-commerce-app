import React from 'react'
import { useNavigate } from 'react-router-dom'
const User_Details = () => {
const navigate = useNavigate();

    return (
        <div className="mt-5 col-12 col-lg-6">

            <h2 className="heading d-flex justify-content-center">Update Details</h2>
            <p className="d-flex justify-content-center">Edit Details to be Updated...</p>

            <form action="/updateDetails" className="form-style"  method="post">

                <div className="row">
                    <div className="col mb-3 d-flex flex-column">
                        <label><strong>First Name</strong></label>
                        <input type="text" placeholder="James" name="first_name" />
                    </div>

                    <div className="col mb-3 d-flex flex-column">
                        <label><strong>Last Name</strong></label>
                        <input type="text" placeholder="Bond" name="last_name" />
                    </div>
                </div>

                <div className="mb-3 d-flex flex-column">
                    <label><b>Email</b></label>
                    <input type="email" name="Email" placeholder='someone@gmail.com' />
                </div>



                <div className='row'>
                    <div className="col mb-3 d-flex flex-column">
                        <label><b>Password</b></label>
                        <input type="password" name="Password" />
                    </div>

                    <div className="col mb-3 d-flex flex-column">
                        <label><b>Phone Number</b></label>
                        <input placeholder='123456789' type="tel" name="Phone" />
                    </div>
                </div>

                <div className="row">
                    <div className="col mb-3 d-flex flex-column">
                        <label><strong>City</strong></label>
                        <input type="textflex flex-column" placeholder="Los Angeles" name="city" />
                    </div>

                    <div className="col mb-3 d-flex flex-column">
                        <label><strong>Country</strong></label>
                        <input  type="textflex flex-column" placeholder="USA" name="country" />
                    </div>
                </div>

                <div className="mb-3 d-flex flex-column">
                    <label><strong>Address</strong></label>
                    <input type="text" id="address" placeholder="Sunset Valley, 38" name="address" />
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn-normal" type="submit" >Update</button>
                </div>

            </form>
        </div>
    )
}

export default User_Details