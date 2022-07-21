import React from 'react'

const User_Details = () => {



    return (
        <div className="mt-5 col-5">

            <h2 className="text-info d-flex justify-content-center">User Details</h2>
            <p className=" d-flex justify-content-center">Update User Details...</p>

            <form action="/updateDetails" className="card-style" method="post">

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label"><strong>First Name</strong></label>
                            <input className="form-control" type="text" placeholder="John" name="first_name" />
                        </div>
                    </div>

                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label"><strong>Last Name</strong></label>
                            <input className="form-control" type="text" placeholder="Doe" name="last_name" />
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label"><b>Email</b></label>
                    <input className="form-control item" type="email" name="Email" placeholder='someone@gmail.com' />
                </div>

                <div className="mb-3">
                    <label className="form-label"><b>Password</b></label>
                    <input className="form-control item" type="password" name="Password" />
                </div>

                <div className="mb-3">
                    <label className="form-label"><b>Phone Number</b></label>
                    <input className="form-control item" type="tel" name="Phone" />
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3"><label className="form-label" ><strong>City</strong></label><input className="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                    </div>
                    <div className="col">
                        <div className="mb-3"><label className="form-label"><strong>Country</strong></label><input className="form-control" type="text" placeholder="USA" name="country" /></div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label"><strong>Address</strong></label>

                    <input className="form-control" type="text" id="address" placeholder="Sunset Valley, 38" name="address" />
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" type="submit">Update</button>
                </div>

            </form>
        </div>
    )
}

export default User_Details