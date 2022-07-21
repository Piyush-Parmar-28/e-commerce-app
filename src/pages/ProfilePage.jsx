import React from 'react'
import Navbar from "../components/Common_Components/Navbar"
import Footer from "../components/Common_Components/Footer"
import PageTitle from "../components/Common_Components/PageTitle"
import UserDetails from '../components/ProfilePage/UserDetails'

const ProfilePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="clean-block clean-form dark">
                <div className="container-fluid px-5">
                    <PageTitle
                        title="My Profile"
                        desc=""
                    ></PageTitle>

                    <UserDetails />

                </div>
            </section>

            <Footer></Footer>

        </div>

    )
}

export default ProfilePage