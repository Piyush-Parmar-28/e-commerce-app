import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ProfileImage from './ProfileImage';
import axios from 'axios';

const UserDetails = () => {
    //  (Refer point 1 from Image-Route.js)
    //  2. Hum API de saara data yaha get kar rahe hai.
    const url = '/getProfile';
    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => {
            setUserDetails(res.data);
        })

    }, [])

    return (
        <div className="container">
            {
                userDetails.map((contents) => {
                    return (
                        <div key={contents._id}>
                            
                            {/* Getting Profile Image based on Avatar or Uploaded Image */}
                            {
                                contents.ImageURL != "" ? 
                                    <ProfileImage
                                        imgSrc= {contents.ImageURL}
                                    ></ProfileImage> : 

                                    <ProfileImage
                                        imgSrc= {"data:image/gif;base64,"+contents.ImageData}
                                    ></ProfileImage>
                            }

                            <form action="/profile" method="post" className="card-style">
                                <div className="mb-2 d-flex">
                                    <div>
                                        <b>Name:</b>
                                    </div>

                                    <div className='ms-2'>
                                        <p>{contents.Fname + " " + contents.Lname}</p>
                                    </div>
                                </div>

                                <div className="mb-2 d-flex">
                                    <div>
                                        <b>Phone:</b>
                                    </div>

                                    <div className='ms-2'>
                                        <p>{contents.Phone}</p>
                                    </div>
                                </div>

                                <div className="mb-2 d-flex">
                                    <div>
                                        <b>City:</b>
                                    </div>

                                    <div className='ms-2'>
                                        <p>{contents.City}</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-around">

                                    {/* Do not use href to redirect page, as it will refresh the page each time we redirect the page. */}
                                    {/* Use Link instead, as it will not redirect our page. */}
                                    <Link to="/update">
                                        <button className="btn btn-warning" type="submit" href='/update'>Update Details</button>
                                    </Link>

                                    <Link to="/">
                                        <button className="btn btn-danger" type="submit">LogOut</button>
                                    </Link>

                                </div>
                            </form>
                        </div>
                    )

                })
            }


        </div>
    )
}

export default UserDetails