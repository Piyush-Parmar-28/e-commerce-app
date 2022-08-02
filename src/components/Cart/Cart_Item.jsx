import React, { Fragment, useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import Image from '../../pages/Image'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const Cart_Item = (props) => {

    const productURL = `/getProduct/${props.itemID}`
    const [productData, setProductData] = useState([])
    const [quantity, setQuantity] = useState(props.quantity)

    useEffect(() => {
        fetch(productURL).then(data => data.json()).then(myData => {
            // Converting myData to array so that it can be mapped
            setProductData([myData])
        })

    }, [])

    // console.log("product Data is:"+ productData);

    const min = 1;
    function updateCount(event) {
        event.target.value = Math.max(min, event.target.value)
        setQuantity(event.target.value)
    }

    return (

        <div className="m-4 p-4 box">
            <div className="row justify-content-center align-items-center">

                {
                    productData.map(contents => {

                        return (

                            <Fragment key={contents._id}>

                                <div className='d-flex justify-content-between'>

                                    {/* Image & Desc Section */}
                                    <div className='d-flex justify-content-evenly'>
                                        <Image photoID={contents.ImageID}></Image>

                                        <div className='ms-5 d-flex flex-column justify-content-center align-items-center'>
                                            <Link to="#">
                                                <p className='m-auto'>{contents.Product}</p>
                                            </Link>

                                            {/* Description */}
                                            <div className="d-flex align-items-center mt-2">
                                                <p className="mb-auto">{contents.Desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quantity, Price & Remove Section */}
                                    <div className='d-flex justify-content-evenly'>

                                        {/* Quantity */}
                                        <div className="d-flex flex-column justify-content-center align-items-center col-3">
                                            <h6><b>Quantity</b></h6>
                                            <input type="number" id="number" className="form-control" defaultValue={props.quantity} min={1} onChange={updateCount} />
                                        </div>

                                        {/* Price */}
                                        <div className="d-flex flex-column justify-content-center align-items-center col-3">
                                            <h6><b>Price</b></h6>
                                            <p className='m-0'>$ {contents.Price * quantity}</p>
                                        </div>

                                        {/* Button */}
                                        <form className= "d-flex justify-content-center align-items-center" action='/removeProduct' method='post'>
                                            <input className='d-none' type="text" defaultValue={contents._id} name= "product"></input>

                                            <button type="submit" className="btn btn-outline-danger btn-sm d-flex justify-content-center align-items-center">
                                                <Tooltip
                                                    TransitionComponent={Fade}
                                                    TransitionProps={{ timeout: 600 }}
                                                    title="Delete"
                                                >
                                                    <DeleteIcon />
                                                </Tooltip>
                                            </button>

                                        </form>

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