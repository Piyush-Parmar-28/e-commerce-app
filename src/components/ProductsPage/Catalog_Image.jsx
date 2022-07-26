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
                    <Rating name="read-only" size= "small" precision={0.5} value={props.starValue} readOnly />

                    <div>
                        <h6>$ {props.itemPrice}</h6>
                    </div>
                </div>

                <form action='/selected' method='get'>
                    <input className='d-none' name='selectedProduct' type="text" value={props.productID} ></input>

                    <div className='d-flex justify-content-between'>
                        <button type="submit" class="btn btn-primary btn-sm">Details</button>
                        <button class="btn btn-danger btn-sm">Cart</button>
                    </div>
                    

                </form>

            </div>

        </div>

    )
}

export default Catalog_Image