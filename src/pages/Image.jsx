import React, { useEffect, useState } from "react";
import style from "./ImageSize.module.css"

const Image = (props) => {
    
    const imageUrl = `/add/${props.photoID}/image`;
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
        <div className="d-flex justify-content-center">
            <img className={`mx-auto ${style.imgSize}`} src={img} alt="image not loaded" />
        </div>
    );
};
export default Image