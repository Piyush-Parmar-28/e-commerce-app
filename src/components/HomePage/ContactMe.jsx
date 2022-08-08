import React from 'react'

import PageTitle from '../Common_Components/PageTitle'

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

                        {/* Message Box */}
                        <div className="pb-5">

                            <form action="https://formsubmit.co/9136b2c305e27e56dc48df97e6f3158b" method="post" role="form" className="form-style">

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