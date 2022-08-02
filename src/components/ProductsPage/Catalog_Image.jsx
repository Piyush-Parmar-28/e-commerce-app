import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import Image from '../../pages/Image'
import Rating from '@mui/material/Rating';

const Catalog_Image = (props) => {

    const navigate= useNavigate()

    const [product, setProduct]= useState({
        productID: "",
        itemPrice: ""
    })

    useEffect(() =>{
        setProduct( {productID: props.productID, itemPrice: props.itemPrice} )
    }, [])

    const postData= async (event)=>{
        event.preventDefault()

        // Using object destructuring for: productID= product.productID
        const {productID, itemPrice}= product

        const res= await fetch("/AddToCart", {
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

        const data= await res.json()

        if(data.status === 200){
            navigate("/cart")
        }
        else{
            window.alert("Failed to add product to cart!\nTry Again.")
        }
    }

    return (

        <div className="col-12 col-lg-4">

            <div className="box p-3">
                <div className="mb-4">
                    <a href="#">
                        <Image photoID={props.myImageID}></Image>
                    </a>
                </div>

                <h5 className="d-flex justify-content-center mb-3"><b>{props.productName}</b></h5>

                <div className="d-flex justify-content-between">
                    <Rating name="read-only" size="small" precision={0.5} value={props.starValue} readOnly />

                    <div>
                        <h6>$ {props.itemPrice}</h6>
                    </div>
                </div>


                <div className='d-flex justify-content-between'>
                    
                    <Link to= {"/selected?selectedProduct="+ props.productID} >
                        <button type="submit" className="btn btn-primary btn-sm" >Details</button>
                    </Link>

                    <form method='post'>
                        <input className='d-none' name='cartProduct' type="text" defaultValue={props.productID} ></input>
                        <input className='d-none' name='productPrice' type="text" defaultValue={props.itemPrice} ></input>
                        <button className="btn btn-danger btn-sm" onClick={postData}>Cart</button>
                    </form>

                </div>

            </div>

        </div>

    )
}

export default Catalog_Image