import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import PageTitle from "../Common_Components/PageTitle"
import ImageCard from './ImageCard';
import Update_UserDetails from "./Update_UserDetails"
import { profileImage } from '../../Data';

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
                <div className="container">
                    <PageTitle
                        title="Change Avatar"
                    ></PageTitle>


                    <div className="row row-cols-3 row-cols-lg-6 g-5 g-lg-4">

                        {
                            profileImage.map((contents) => {

                                if (contents.src === selectedImage.image) {
                                    selectedImageBorder = selectedImage.myStyle
                                }
                                else {
                                    selectedImageBorder = ""
                                }

                                return (
                                    <ImageCard
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

                    <div className="mt-5 col-5">
                        <h2 className="text-info d-flex justify-content-center">Profile Photo</h2>
                        <p className=" d-flex justify-content-center">Selected Profile Photo...</p>

                        <form action="/saveImage" method='post' className="card-style">
                            <div className="d-flex justify-content-center mb-4">
                                <img className="mb-1" style={{ height: "150px", width: "150px" }} src={selectedImage.image}></img>
                            </div>
                            <input className="form-control item d-none" type="text" id="email" name="mySelectedImage" defaultValue={selectedImage.image} required />

                            <div className="d-flex justify-content-between mt-4">
                                <Link to='/update'>
                                    <button className="btn btn-primary" type="submit">Refresh <RefreshIcon /></button>
                                </Link>

                                <button className="btn btn-primary" type="submit">Set Profile</button>
                            </div>
                        </form>

                    </div>

                    <Update_UserDetails />
                </div>

            </section>
        </main>
    )
}

export default UpdateImage