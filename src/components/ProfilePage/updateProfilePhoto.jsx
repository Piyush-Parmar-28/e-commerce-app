import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="mt-5 col-12 col-lg-6">
      <h2 className="heading d-flex justify-content-center">
        Update Profile Photo
      </h2>
      <p className="d-flex justify-content-center">Select image ...</p>
      <form
        action="/uploadImage"
        className="form-style"
        encType="multipart/form-data"
        method="post"
      >
        <div className="row">
          <div className="col mb-3 d-flex flex-column">
            <label>
              <strong>Profile Photo</strong>
            </label>
            <input
              type="file"
              placeholder="Select Profile photo..."
              name="image"
            />
          </div>
          <div className="col mb-3 d-flex justify-content-center">
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
