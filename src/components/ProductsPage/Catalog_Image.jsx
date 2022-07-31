import React, { useState } from 'react'

import Image from '../../pages/Image'
import Rating from '@mui/material/Rating';

const Catalog_Image = (props) => {

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
                    <form action='/selected' method='get'>
                        <input className='d-none' name='selectedProduct' type="text" defaultValue={props.productID} ></input>
                        <button type="submit" className="btn btn-primary btn-sm">Details</button>
                    </form>

                    <form action='/AddToCart' method='post'>
                        <input className='d-none' name='cartProduct' type="text" defaultValue={props.productID} ></input>
                        <button className="btn btn-danger btn-sm">Cart</button>
                    </form>

                </div>

            </div>

        </div>

    )
}

export default Catalog_Image