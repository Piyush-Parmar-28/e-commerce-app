import React from 'react'
import Navbar from '../components/Common_Components/Navbar'
import Footer from '../components/Common_Components/Footer'
import PageTitle from '../components/Common_Components/PageTitle'
import UpdateImage from '../components/ProfilePage/UpdateImage'

const UpdateInfo = () => {

    return (
        <div className='dark-bg'>
            <Navbar></Navbar>

            <section className="clean-block clean-form dark">
                <div className="container-fluid px-5">
                    <PageTitle
                        title="Update Profile"
                        desc=""
                    ></PageTitle>

                    <UpdateImage
                        imgSrc= { Math.floor(Math.random() * 1000000) }
                    ></UpdateImage>

                    <div className='pt-5'></div>
                </div>
            </section>

            <Footer></Footer>

        </div>
    )
}

export default UpdateInfo