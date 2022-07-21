import React, { useState, useEffect } from 'react'
import axios from 'axios';


const UserDetails = () => {
    //  (Refer point 1 from Image-Route.js)
    //  2. Hum API de saara data yaha get kar rahe hai.
    const url = '/getProfile';
    const [imageSrc, setImageSrc] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => {
            setImageSrc(res.data);
        })
    }, [])

    // console.log(imageSrc);

    return (
        <div className="container">
            {
                imageSrc.map((contents) => {
                    // console.log(contents);
                    return (
                        <div key={contents._id}>
                            <div className="d-flex justify-content-center pb-4">
                                <img src={contents.ImageURL} className="rounded-circle" style={{ height: "220px", width: "220px", }} />
                            </div>

                            <form action="/profile" method="post" className= "card-style">
                                <div className="mb-2 d-flex">
                                    <div>
                                        <b>Name:</b>
                                    </div>

                                    <div className='ms-2'>
                                        <p>{contents.Fname+ " "+ contents.Lname}</p>
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

                                <div className="d-flex justify-content-center">
                                    <a className="btn btn-warning" type="submit" href='/update'>Update Details</a>
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