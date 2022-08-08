import React from 'react'
import Navbar2 from '../components/Common_Components/Navbar2'
import PageTitle from '../components/Common_Components/PageTitle'
import UpdateImage from '../components/ProfilePage/UpdateImage'

const UpdateInfo = () => {

    return (
        <div className='blue-bg'>
            <Navbar2></Navbar2>

            <section className="clean-block clean-form dark pt-5">
                <div className="container-fluid px-5">
                    <PageTitle
                        title="Update Avatar"
                        desc=""
                    ></PageTitle>

                    <UpdateImage
                        imgSrc= { Math.floor(Math.random() * 1000000) }
                    ></UpdateImage>

                    <div className='pt-5'></div>
                </div>
            </section>

        </div>
    )
}

export default UpdateInfo