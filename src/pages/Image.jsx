import React, { useEffect, useState } from "react";

const Image = (props) => {
    const imageUrl = `/add/${props.photo}/image`;
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
        <>
            <img height="300px" src={img} alt="Image Not Loaded" />
        </>
    );
};
export default Image