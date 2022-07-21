import React from 'react'
import PageTitle from '../Common_Components/PageTitle'
import SnackBarMessageBtn from "../Common_Components/SnackBarMessageBtn"
import ShareIcon from '@mui/icons-material/Share'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

const ContactMe = () => {
    return (
        <main id="main">
            <section id="contact" className="contact pt-0">
                <div className="container">

                    <PageTitle
                        title="Contact"
                        desc="Contact me via any of the options below"
                    ></PageTitle>

                    <div className="row">

                        <div className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-style">

                                        <div className="d-flex justify-content-center">
                                            <i className="contact-btn"><ShareIcon></ShareIcon></i>
                                        </div>

                                        <h3 className="pt-1 pb-2 d-flex justify-content-center" >Social Profiles</h3>

                                        <div className="d-flex justify-content-center">

                                            <a className="contact-btn" href="#"><i className="bi bi-instagram p"></i></a>
                                            <a className="contact-btn" href="https://github.com/Piyush-Parmar-28?tab=repositories" target="_blank"><i className="bi bi-github 2"></i></a>
                                            <a className="contact-btn" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                            <a className="contact-btn" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i className="bi bi-twitter"></i></a>
                                            <a className="contact-btn" href="https://www.linkedin.com/in/piyush-parmar-76b97820b/" target="_blank"><i className="bi bi-whatsapp"></i></a>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="card-style mt-4 mb-4 d-flex justify-content-between">
                                        <div>
                                            <div className="d-flex justify-content-center">
                                                <i className="contact-btn"><a><EmailOutlinedIcon /></a></i>
                                            </div>

                                            <h3 className="pt-1 pb-2 d-flex justify-content-center">Email Me</h3>
                                            <p className="d-flex justify-content-center">piyush2822ecommerce@gmail.com</p>
                                        </div>


                                        <div >
                                            <div className="d-flex justify-content-center">
                                                <i className="contact-btn"><a><LocalPhoneOutlinedIcon /></a></i>
                                            </div>
                                            <h3 className="pt-1 pb-2 d-flex justify-content-center">Call Me</h3>
                                            <p className="d-flex justify-content-center">7014628881</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <form action="https://formsubmit.co/9136b2c305e27e56dc48df97e6f3158b" method="post" role="form"
                                className="card-style form-background">

                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="http://localhost:3000/home#main" />

                                <div className="row">

                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control"
                                            id="name" placeholder="Your Name" required />
                                    </div>

                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email"
                                            id="email" placeholder="Your Email" required />
                                    </div>

                                </div>

                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject"
                                        id="subject" placeholder="Subject" required />
                                </div>

                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" id="message" rows="6" placeholder="Message" required>
                                    </textarea>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary my-3">Send Message</button>
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