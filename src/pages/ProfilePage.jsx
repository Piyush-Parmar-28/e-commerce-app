import React from 'react'
import Navbar2 from "../components/Common_Components/Navbar2"
import PageTitle from "../components/Common_Components/PageTitle"
import UserDetails from '../components/ProfilePage/UserDetails'

const ProfilePage = () => {
    return (
        
        <div className='blue-bg'>
            <Navbar2></Navbar2>
            <section style={{minHeight:'100vh'}} className="clean-block clean-form dark pt-5">
                <div  className="container-fluid px-5">
                    <PageTitle
                        title="My Profile"
                        desc=""
                    ></PageTitle>

                    <div className='pb-5'>
                        <UserDetails />
                    </div>

                </div>
            </section>
        </div>

    )
}

export default ProfilePage