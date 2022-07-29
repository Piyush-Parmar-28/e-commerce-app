import React, { Fragment, useState, useEffect } from 'react'
import {Link} from "react-router-dom"

import Image from '../../pages/Image'

const Cart_Item = (props) => {

    const productURL = `/getProduct/${props.itemID}`
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch(productURL).then(data => data.json()).then(myData => {
            setProductData(myData)
        })
    }, [])

    return (
        <div className="product m-5">
            <div className="row justify-content-center align-items-center">

                {
                    productData.map(contents => {
                        return (
                            <Fragment>
                                <div className="col-md-3">
                                    <Image photoID={contents.ImageID}></Image>
                                </div>


                                <div className="col-md-5">

                                    <Link to= "#">
                                        <p>{contents.Product}</p>
                                    </Link>

                                    {/* Description */}
                                    <div className="d-flex align-items-center mt-2">
                                        {/* <h6><b>Display: </b></h6> */}
                                        <p className="ms-2 mb-auto">{contents.Desc}</p>
                                    </div>

                                    {/* <div className="d-flex align-items-center">
                                        <h6><b>RAM: </b></h6>
                                        <p className="ms-2 mb-auto">4GB</p>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <h6><b>Memory: </b></h6>
                                        <p className="ms-2 mb-auto">32GB</p>
                                    </div> */}

                                </div>

                                {/* Quantity */}
                                <div className="col-6 col-md-2">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="d-none d-md-block"><b>Quantity</b></h6>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <input type="number" id="number" className="form-control" defaultValue={1} min={1} />
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="col-6 col-md-2">
                                    <div className="d-flex justify-content-center">
                                        <h6 className="d-none d-md-block"><b>Price</b></h6>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <p>${contents.Price}</p>
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