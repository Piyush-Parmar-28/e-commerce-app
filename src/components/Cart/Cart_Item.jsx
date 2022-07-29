import React, { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import Image from '../../pages/Image'

const Cart_Item = (props) => {

    const productURL = `/getProduct/${props.itemID}`
    const [productData, setProductData] = useState([])
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(productURL).then(data => data.json()).then(myData => {
            setProductData(myData)
        })

    }, [])

    const min= 1;
    function updateCount(event) {
        event.target.value= Math.max(min, event.target.value)
        setQuantity(event.target.value)
    }


    return (

        <div className="m-5">
            <div className="row justify-content-center align-items-center">

                {
                    productData.map(contents => {

                        return (

                            <Fragment>
                                <div className="col-md-3">
                                    <Image photoID={contents.ImageID}></Image>
                                </div>


                                <div className="col-md-5">

                                    <Link to="#">
                                        <p>{contents.Product}</p>
                                    </Link>

                                    {/* Description */}
                                    <div className="d-flex align-items-center mt-2">
                                        <p className="ms-2 mb-auto">{contents.Desc}</p>
                                    </div>

                                </div>

                                {/* Quantity */}
                                <div className="col-6 col-md-2">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="d-none d-md-block"><b>Quantity</b></h6>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <input type="number" id="number" className="form-control" defaultValue={1} min={1} onChange= {updateCount}/>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="col-6 col-md-2">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="d-none d-md-block"><b>Price</b></h6>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <p>$ {contents.Price*quantity}</p>
                                    </div>
                                </div>
                            </Fragment>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cart_Item