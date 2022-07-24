import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { profileAvatar } from '../../Data';
import PageTitle from "../Common_Components/PageTitle"
import AvatarCard from './AvatarCard';
import Update_UserDetails from "./Update_UserDetails"
import RefreshIcon from '@mui/icons-material/Refresh';

const UpdateImage = (props) => {

    var [selectedImage, setselectedImage] = useState({
        image: "",
        myStyle: ""
    })

    function selectImage(event, imageSource) {
        setselectedImage(previousState => {
            return { ...previousState, image: imageSource, myStyle: "5px solid red" }
        });
    }

    // console.log("selected Image: "+ selectedImage.image);

    var selectedImageBorder = "";

    return (
        <main className="page login-page">
            <section className="clean-block clean-form dark m-0">

                {/* Container for Avatar Card */}
                <div className="container">

                    <PageTitle
                        title="Change Avatar"
                    ></PageTitle>

                    <div className="row row-cols-3 row-cols-lg-6 g-5 g-lg-4">

                        {
                            profileAvatar.map((contents) => {

                                if (contents.src === selectedImage.image) {
                                    selectedImageBorder = selectedImage.myStyle
                                }
                                else {
                                    selectedImageBorder = ""
                                }

                                return (
                                    <AvatarCard
                                        key={contents.id}
                                        ImgSrc={contents.src}
                                        ImgAltText={contents.altText}
                                        selectImageFunction={selectImage}
                                        selectedStyle={selectedImageBorder}
                                    />
                                )
                            })
                        }

                    </div>

                </div>

                <div className="d-flex justify-content-evenly flex-wrap mt-2">

                    {/* Selected Avatar */}
                    <div className="mt-5 col-12 col-lg-6">
                        <h2 className="text-info d-flex justify-content-center">Select Avatar</h2>
                        <p className=" d-flex justify-content-center">Select Avatar as Profile Photo...</p>

                        <form action="/saveImage" method='post' className="card-style">

                            <div className="d-flex justify-content-center mb-4">
                                <img className="mb-1" style={{ height: "150px", width: "150px" }} src={selectedImage.image}></img>
                            </div>

                            <input className="form-control item d-none" type="text" name="mySelectedImage" defaultValue={selectedImage.image} />

                            <div className="d-flex justify-content-between mt-4">
                                <Link to='/update'>
                                    <button className="btn btn-primary" type="submit">Refresh <RefreshIcon /></button>
                                </Link>

                                <button className="btn btn-primary" type="submit">Set Profile</button>
                            </div>
                        </form>

                    </div>

                    {/* Update Details Form */}
                    <Update_UserDetails />
                    
                </div>

            </section>
        </main>
    )
}

export default UpdateImage