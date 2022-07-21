import React, { useState } from 'react'

const ImageCard = (props) => {

    return (
        <div className="col" >
            <div className="p-3 border bg-light d-flex justify-content-center update-image" onClick={ (event)=>{ props.selectImageFunction(event, props.ImgSrc) }}>
                <img 
                    src={props.ImgSrc} 
                    className="rounded-circle" 
                    alt={props.ImgAltText} 
                    style={{ height: "120px", width: "120px", border: props.selectedStyle}}
                />
            </div>
        </div>
    )
}

export default ImageCard