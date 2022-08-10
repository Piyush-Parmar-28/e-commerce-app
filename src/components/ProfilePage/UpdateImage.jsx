import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { profileAvatar } from "../../Data";
import AvatarCard from "./AvatarCard";
import Update_UserDetails from "./Update_UserDetails";
import RefreshIcon from "@mui/icons-material/Refresh";
import ProfilePhoto from "./updateProfilePhoto";

const UpdateImage = (props) => {

    const navigate = useNavigate()

    var [btnText, setBtnText] = useState("Set Profile")
    var [selectedImage, setselectedImage] = useState({
        image: "",
        myStyle: "",
    });

    function refreshPage() {
        window.location.reload(true)
    }

    function selectImage(event, imageSource) {
        setselectedImage((previousState) => {
            return { ...previousState, image: imageSource, myStyle: "5px solid red" };
        });
    }

    const postData = async (event) => {
        event.preventDefault()

        // Using object destructuring for image= selectedImage.image
        const { image } = selectedImage

        const res = await fetch("/saveImage", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            //  Since our server cannot understand JSON, we must convert it to string
            //  The string will be sent as body to the server
            body: JSON.stringify({
                //  Using object destructuring for image: image
                image
            })
        })

        const data = await res.json()

        if (data.status === 200) {
            setBtnText("Profile Photo Updated!")

            setTimeout(() => {
                navigate("/profile")
            }, 1500)
        }
        else {
            setBtnText("Error in updating photo!")

            setTimeout(() => {
                setBtnText("Set Profile")
            }, 2000)
        }

    }

    var selectedImageBorder = "";

    return (
        <main className="page login-page">
            <section className="clean-block clean-form dark m-0">
                {/* Container for Avatar Card */}
                <div className="container">

                    <div className="row row-cols-3 row-cols-lg-6 g-5 g-lg-4">
                        {profileAvatar.map((contents) => {
                            if (contents.src === selectedImage.image) {
                                selectedImageBorder = selectedImage.myStyle;
                            } else {
                                selectedImageBorder = "";
                            }

                            return (
                                <AvatarCard
                                    key={contents.id}
                                    ImgSrc={contents.src}
                                    ImgAltText={contents.altText}
                                    selectImageFunction={selectImage}
                                    selectedStyle={selectedImageBorder}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="d-flex justify-content-evenly flex-wrap mt-2">
                    {/* Selected Avatar */}
                    <div className="mt-5 col-12 col-lg-6">
                        <h2 className="d-flex justify-content-center heading">
                            Select Avatar
                        </h2>
                        <p className="d-flex justify-content-center">
                            Select Avatar as Profile Photo...
                        </p>

                        <form method="post" className="form-style">
                            <div className="d-flex justify-content-center mb-4">
                                <img
                                    className="mb-1"
                                    style={{ height: "150px", width: "150px" }}
                                    src={selectedImage.image}
                                    alt="Choose a Avatar!...Refresh to change Avatar list"
                                ></img>
                            </div>
                            <input
                                className="item d-none"
                                type="text"
                                name="mySelectedImage"
                                defaultValue={selectedImage.image}
                            />
                            <div className="d-flex justify-content-between mt-4">
                                <Link to="/update">
                                    <button className="btn-normal" type="submit" onClick={refreshPage}>
                                        Refresh <RefreshIcon />
                                    </button>
                                </Link>

                                <button className="btn-normal" type="submit" style={btnText === "Profile Photo Updated!" ? { background: '#01966e' } : { background: '#e1775d' }} onClick={postData}>
                                    {btnText}
                                </button>
                            </div>
                        </form>

                        <ProfilePhoto />

                    </div>

                    <Update_UserDetails />
                </div>
            </section>
        </main>
    );
};

export default UpdateImage;