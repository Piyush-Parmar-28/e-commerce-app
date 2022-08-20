import React, { useEffect, useState } from "react";

const ProfileImage2 = (props) => {
    
    const imageUrl = '/getProfileImage';
    const [img, setImg] = useState();

    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    return (
        <div className="d-flex justify-content-center" style={{width: "220px", height: "220px", overflow: "hidden", borderRadius: "50%"}}>
            <img className="mx-auto" src={img} alt="image not loaded" />
        </div>
    );
};
export default ProfileImage2