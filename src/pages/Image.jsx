import React, { useEffect, useState } from "react";

const Image = (props) => {
    const imageUrl = `/add/${props.photoID}/image`;
    const [img, setImg] = useState();

    const fetchImage = async () => {
        const res = await fetch(imageUrl);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <img className="mx-auto" style={{width: "100px", height: "100px"}} src={img} alt="image not loaded" />
        </div>
    );
};
export default Image