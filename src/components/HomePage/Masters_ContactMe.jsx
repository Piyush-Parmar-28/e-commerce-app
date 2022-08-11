import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import PageTitle from '../Common_Components/PageTitle'

const Masters_ContactMe = () => {
    const [addProductDisplay, setAddProductDisplay] = useState("none")

    useEffect(() => {
        fetch("/checkAdmin").then(data => data.json()).then(myData => {

            if (myData.status === "admin") {
                setAddProductDisplay("")
            }
        })
    }, [])

    return (
        <main>
            <section id="contact" className="contact pt-0">
                <div className="p-4 d-flex justify-content-around adjustFlex">

                    {/* Contact me */}
                    <div className='p-4'>
                        <PageTitle
                            title="Contact"
                            desc="Contact us in case of any queries..."
                        ></PageTitle>

                        <div className="row">

                            {/* Message Box */}
                            <div className="pb-5">

                                <form action="https://formsubmit.co/9136b2c305e27e56dc48df97e6f3158b" method="post" role="form" className="form-style">

                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_next" value="http://localhost:3000/home#main" />

                                    <div className="row">

                                        <div className="col d-flex flex-column mb-3">
                                            <label><strong>Name</strong></label>
                                            <input type="text" id="name" placeholder="John Carter" />
                                        </div>

                                        <div className="col d-flex flex-column mb-3">
                                            <label><strong>Subject</strong></label>
                                            <input type="text" id="subject" name="subject" placeholder="Your Subject" />
                                        </div>

                                    </div>

                                    <div className="mb-3 d-flex flex-column">
                                        <label><strong>Email</strong></label>
                                        <input type="email" id="email" name="email" placeholder="johncarter@gmail.com" required />
                                    </div>


                                    <div className="mt-3 d-flex flex-column">
                                        <label><strong>Message</strong></label>
                                        <textarea name="message" id="message" rows="6" placeholder="Message" required>
                                        </textarea>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn-normal my-3">Send Message</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                    {/* Web Masters Card */}
                    <div className='p-4 hide-card'>
                        <PageTitle
                            title="Web Masters"
                            desc="Check Out the web masters page..."
                        ></PageTitle>

                        <div className="row">

                            {/* Message Box */}
                            <div className="pb-5 form-style">

                                <div className='d-flex justify-content-between'>

                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <img className='img-size' src="img/profile/piyush.jpg" ></img>
                                        <h4 className='heading name-size mt-1'>Piyush Parmar</h4>
                                    </div>

                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <img className='img-size' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq6gaTf6N93kzolH98ominWZELW881HqCgw&usqp=CAU" ></img>
                                        <h4 className='heading name-size mt-1'>Abhishek Chorotiya</h4>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-around'>
                                    <Link to="/webmasters" className='d-flex justify-content-center mt-4' style={{ textDecoration: "none" }}>
                                        <button className='btn-normal'>Web Masters</button>
                                    </Link>

                                    <div style={{ display: addProductDisplay }}>
                                        <Link to="/add" className='d-flex justify-content-center mt-4' style={{ textDecoration: "none" }}>
                                            <button className='btn-normal'>Add Product</button>
                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Masters_ContactMe