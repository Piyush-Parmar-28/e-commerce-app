import React from 'react'
import { Link } from "react-router-dom"

const Category_Image = (props) => {
    return (
        <div className={props.display}>
            <Link to={"/products?item="+ props.category}>
                <img className="img-fluid fill-image" src={props.image} alt="Image Loading" />
                <span className="info">
                    <h4 className="heading categoryHover" style={{padding:'1rem'}}>{props.label}</h4>
                </span>
            </Link>
        </div>
    )
}

export default Category_Image