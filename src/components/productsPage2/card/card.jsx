import React, { useEffect, useState } from "react";
import style from "./card.module.css";
import Image from "../../../pages/Image";
import { useNavigate, Link } from 'react-router-dom';

import AddIcon from "@mui/icons-material/Add";
import { Rating } from "@mui/material";

const Card = (props) => {
    const navigate = useNavigate()

    const [product, setProduct] = useState({
        productID: "",
        itemPrice: ""
    })

    useEffect(() => {
        setProduct({ productID: props.productID, itemPrice: props.price })
    }, [])

    const postData = async (event) => {
        event.preventDefault()
        // Using object destructuring for: productID= product.productID
        const { productID, itemPrice } = product

        const res = await fetch("/AddToCart", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            // Converting JSON to string since our backend cannot understand JSON
            //  The string will be sent as body
            body: JSON.stringify({
                //  Uisng object destructuring for productID= productID
                productID, itemPrice
            })
        })

        const data = await res.json()

        if (data.status === 200) {
            navigate("/cart")
        }
        else {
            window.alert("Failed to add product to cart!\nTry Again.")
        }
    }

    return (
        <div className={style.card}>
            <Link to={"/selected?selectedProduct=" + props.productID}>
                <div className={style.image}>
                    <Image photoID={props.imageID} size='80%'></Image>
                </div>
            </Link>

            <div className={style.detail_div}>

                <h5 className="text-center heading"><b>{props.name}</b></h5>

                <div className="d-flex justify-content-between px-2">
                    <Rating
                        name="read-only"
                        size="small"
                        precision={0.5}
                        value={props.ratings}
                        readOnly
                    />
                    <h6> Rs. {props.price}</h6>
                </div>


                <div className="d-flex justify-content-between mt-1">
                    
                    <Link to={"/selected?selectedProduct=" + props.productID}>
                        <button className="btn-normal btn-xsmall" style={{paddingLeft: "10px", paddingRight: "10px"}}> Details</button>
                    </Link>

                    <form method="post">
                        <button type="submit" className="btn-icon btn-bg-green btn-xsmall" onClick={postData}>
                            <AddIcon />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Card;
