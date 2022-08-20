import React from "react";

const ProfilePhoto = () => {
    return (
        <div className="mt-5">
            <h2 className="heading d-flex justify-content-center">
                Update Profile Photo
            </h2>
            <p className="d-flex justify-content-center">Upload your image to set as profile photo...</p>
            <form
                action="/uploadImage"
                className="form-style"
                encType="multipart/form-data"
                method="post"
            >
                <div className="d-flex justify-content-around flex-wrap">

                    <input className="" type="file" name="image" />

                    <div className="d-flex align-items-center">
                        <button className="btn-normal" type="submit">
                            Set Photo
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default ProfilePhoto;
