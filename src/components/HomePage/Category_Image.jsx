import React from 'react'

const Category_Image = (props) => {
    return (
        <div className={props.display}>
            <a href="#">
                <img className="img-fluid image fill-image" src={props.image} alt="{contents.altText}" />
                <span className="info">
                    <h4 className="heading">{props.label}</h4>
                </span>
            </a>
        </div>
    )
}

export default Category_Image