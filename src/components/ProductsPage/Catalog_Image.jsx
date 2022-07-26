import React from 'react'

import Image from '../../pages/Image'
import Rating from '@mui/material/Rating';

const Catalog_Image = (props) => {
    return (
        <div className="col-12 col-lg-4">

            <div className="box p-3">
                <div className="mb-4">
                    <a href="#">
                        {/* <img className="img-fluid d-block mx-auto" src={"data:image/jpg;image/png;base64,"+props.imgSrc} /> */}
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
            </div>

        </div>
    )
}

export default Catalog_Image