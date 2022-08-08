import React from 'react'

const Category_Image = (props) => {
    return (
        <div className={props.display}>
            <a href="#">
                <img className="img-fluid fill-image" src={props.image} alt="Image Loading" />
                <span className="info">
                    <h4 className="heading">{props.label}</h4>
                </span>
            </a>
        </div>
    )
}

export default Category_Image