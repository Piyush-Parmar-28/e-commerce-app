import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProfileImage from "./ProfileImage";
import axios from "axios";

const UserDetails = () => {
  //  (Refer point 1 from Image-Route.js)
  //  2. Hum API de saara data yaha get kar rahe hai.
  const url = "/getProfile";
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => {
      setUserDetails(res.data);
      console.log(res.data);
      console.log(userDetails.Fname);
    });
  }, []);

  return (
    <div className="container">
      {!userDetails.ImageURL == "" ? (
        <ProfileImage imgSrc={userDetails.ImageURL}></ProfileImage>
      ) : (
        <ProfileImage
          imgSrc={"data:image/jpg;image/png;base64," + userDetails.ImageData}
        ></ProfileImage>
      )}

      {/* User Details */}
      <form action="/profile" className="card-style">
        <div className="mb-2 d-flex">
          <div>
            <b>Name:</b>
          </div>

          <div className="ms-2">
            <p>{userDetails.Fname + " " + userDetails.Lname}</p>
          </div>
        </div>

        <div className="mb-2 d-flex">
          <div>
            <b>Phone:</b>
          </div>

          <div className="ms-2">
            <p>{userDetails.Phone}</p>
          </div>
        </div>

        <div className="mb-2 d-flex">
          <div>
            <b>City:</b>
          </div>

          <div className="ms-2">
            <p>{userDetails.City}</p>
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <Link to="/update">
            <button className="btn btn-warning">Update Details</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
