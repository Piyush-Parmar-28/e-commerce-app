import React, { useState } from 'react'

import Image from '../../pages/Image'
import Rating from '@mui/material/Rating';
import { useEffect } from 'react';

const Catalog_Image = (props) => {

    // const [key, updateKey]= useState("")
    // useEffect( ()=>{
    //     updateKey(props.key)
    // }, [])

    return (

        <div className="col-12 col-lg-4">

            <div className="box p-3">
                <div className="mb-4">
                    <a href="#">
                        <Image photoID={props.myImageID}></Image>
                    </a>
                </div>

                <h5 className="d-flex justify-content-center mb-3">{props.productName}</h5>

                <div className="d-flex justify-content-between">
                    <Rating name="read-only" value={props.starValue} readOnly />
                    <div>
                        <h5><b>$ {props.itemPrice}</b></h5>
                    </div>
                </div>

                <form action='/selected' method='get'>
                    <input name='selectedProduct' type="text" value={props.productID} ></input>
                    <button type='submit'>Go to Home</button>
                </form>

            </div>

        </div>

    )
}

export default Catalog_Image