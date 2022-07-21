import React from 'react'

const SliderImage = (props) => {
    return (
        <div className="carousel-item active">
            <img src={props.src} className="d-block carousel-img" alt={props.altText} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.label}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default SliderImage