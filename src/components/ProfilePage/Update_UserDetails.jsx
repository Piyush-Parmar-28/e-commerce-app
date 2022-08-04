import React from 'react'

const User_Details = () => {



    return (
        <div className="mt-5 col-12 col-lg-6">

            <h2 className="text-info d-flex justify-content-center">Update Details</h2>
            <p className=" d-flex justify-content-center">Edit Details to be Updated...</p>

            <form action="/updateDetails" className="form-style" encType="multipart/form-data" method="post">

                <div className="row">
                    <div className="col mb-3">
                        <label><strong>First Name</strong></label>
                        <input type="text" placeholder="James" name="first_name" />
                    </div>

                    <div className="col mb-3">
                        <label><strong>Last Name</strong></label>
                        <input type="text" placeholder="Bond" name="last_name" />
                    </div>
                </div>

                <div className="mb-3">
                    <label><b>Email</b></label>
                    <input className=" item" type="email" name="Email" placeholder='someone@gmail.com' />
                </div>

                <div className="mb-3">
                    <label><b>Upload Profile Image</b></label>
                    
                    <input className="item" type="file" name="image" placeholder='select image' accept="image/png, image/jpeg" />
                </div>

                <div className='row'>
                    <div className="col mb-3">
                        <label><b>Password</b></label>
                        <input className="item" type="password" name="Password" />
                    </div>

                    <div className="col mb-3">
                        <label><b>Phone Number</b></label>
                        <input className="item" placeholder='123456789' type="tel" name="Phone" />
                    </div>
                </div>

                <div className="row">
                    <div className="col mb-3"><label ><strong>City</strong></label><input  type="text" placeholder="Los Angeles" name="city" /></div>

                    <div className="col mb-3"><label><strong>Country</strong></label><input  type="text" placeholder="USA" name="country" /></div>
                </div>

                <div className="mb-3">
                    <label><strong>Address</strong></label>
                    <input type="text" id="address" placeholder="Sunset Valley, 38" name="address" />
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn-normal" type="submit">Update</button>
                </div>

            </form>
        </div>
    )
}

export default User_Details