import React from 'react'

import PageTitle from '../Common_Components/PageTitle'
import ShareIcon from '@mui/icons-material/Share'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

const ContactMe = () => {
    return (
        <main>
            <section id="contact" className="contact pt-0">
                <div className="container">

                    <PageTitle
                        title="Contact"
                        desc="Contact me via any of the options below"
                    ></PageTitle>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">

                                {/* Social Profiles */}
                                <div className="col-md-12">
                                    <div className="form-style">

                                        <div className="d-flex justify-content-center">
                                            <i className="btn-icon-no-click"><ShareIcon></ShareIcon></i>
                                        </div>

                                        <h3 className="pt-1 pb-2 d-flex justify-content-center" >Social Profiles</h3>

                                        <div className="d-flex justify-content-between">

                                            <a className="btn-icon" href="#"><i className="bi bi-instagram p"></i></a>

                                            <a className="btn-icon" href="https://github.com/Piyush-Parmar-28?tab=repositories" target="_blank"><i className="bi bi-github 2"></i></a>

                                            <a className="btn-icon" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i className="bi bi-linkedin"></i></a>

                                            <a className="btn-icon" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i className="bi bi-twitter"></i></a>

                                            <a className="btn-icon" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i className="bi bi-whatsapp"></i></a>

                                        </div>

                                    </div>
                                </div>

                                {/* Call & Email */}
                                <div className="col-md-12">

                                    <div className="form-style mt-4 mb-4 d-flex justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <i className="btn-icon-no-click"><a><EmailOutlinedIcon /></a></i>
                                            </div>

                                            <h3 className="pt-1 pb-2 d-flex justify-content-center">Email Me</h3>
                                            <p className="d-flex justify-content-center">piyush2822ecommerce@gmail.com</p>
                                        </div>

                                        <div >
                                            <div className="d-flex justify-content-center">
                                                <i className="btn-icon-no-click"><a><LocalPhoneOutlinedIcon /></a></i>
                                            </div>
                                            <h3 className="pt-1 pb-2 d-flex justify-content-center">Call Me</h3>
                                            <p className="d-flex justify-content-center">7014628881</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                        {/* Message Box */}
                        <div className="col-lg-6">

                            <form action="https://formsubmit.co/9136b2c305e27e56dc48df97e6f3158b" method="post" role="form"
                                className="form-style">

                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="http://localhost:3000/home#main" />

                                <div className="row">

                                    <div className="col d-flex flex-column">
                                        <div className="mb-3">
                                            <label><strong>Name</strong></label>
                                            <input type="text" id="name" placeholder="John Carter" />
                                        </div>
                                    </div>

                                    <div className="col d-flex flex-column">
                                        <div className="mb-3">
                                            <label><strong>Subject</strong></label>
                                            <input type="text" id="subject" name="subject" placeholder="Your Subject" />
                                        </div>
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
            </section>



        </main>
    )
}

export default ContactMe