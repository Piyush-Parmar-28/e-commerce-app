import React, {Fragment, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import Image from '../../pages/Image'

import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Single_Cart_Item = (props) => {
    const navigate= useNavigate()

    const [quantity, setQuantity] = useState(props.quantity)

    const min = 1;
    const verifyQuantity = async (event) => {
        event.target.value = Math.max(min, event.target.value)
        setQuantity(event.target.value)
    }

    // Increase Value Function
    const increaseValue = async (event) => {
        setQuantity(quantity+1)
        const myProductID = props._id
        // console.log("myProductID is: " + myProductID);

        const res = await fetch("/AddToCart", {
            method: "post",
            headers: {
                "Content-Type": "Application/JSON"
            },

            //  Converting JSON to string, since our server can only understand string
            //  The string will be sent as body.
            body: JSON.stringify({ productID: myProductID })
        })

        const data = await res.json()
        // console.log("data is: "+ data);

        if (data.status === 200) {
            navigate("/cart")
        }
        else {
            window.alert("Failed to update quantity!\nTry Again.")
        }
    }

    // Decrease Value Function
    const decreaseValue = async (event) => {
        setQuantity(quantity-1)
        const myProductID= props._id

        const res= await fetch("/removeOneFromCart", {
            method: "post",
            headers: {
                "Content-Type": "Application/JSON"
            }, 

            //  Converting JSON to string, since our server can only understand string
            //  The string will be sent as body
            body: JSON.stringify({
                productID: myProductID
            })
        })

        const data= await res.json()

        if(data.status === 200){
            navigate("/cart")
        }
        else{
            window.alert("Failed to remove from cart!\nTry Again.")
        }
    }

    return (
        <Fragment key={props._id}>

            <div className='d-flex justify-content-between'>

                {/* Image & Desc Section */}
                <div className='d-flex justify-content-evenly'>
                    <Image photoID={props.ImageID}></Image>

                    <div className='ms-5 d-flex flex-column justify-content-center align-items-center'>
                        <Link to="#">
                            <p className='m-auto'>{props.Product}</p>
                        </Link>

                        {/* Description */}
                        <div className="d-flex align-items-center mt-2">
                            <p className="mb-auto">{props.Desc}</p>
                        </div>
                    </div>
                </div>

                {/* Quantity, Price & Remove Section */}
                <div className='d-flex justify-content-evenly'>

                    {/* Quantity */}
                    <div className="d-flex flex-column justify-content-center align-items-center col-4">
                        <h6><b>Quantity</b></h6>

                        <div className='d-flex'>
                            {/* Decrease Quantity Button */}
                            <form className="d-flex justify-content-center align-items-center" action='/removeProduct' method='post'>
                                <button className="btn btn-outline-danger btn-sm me-1 p-0" onClick={decreaseValue} >
                                    <RemoveIcon />
                                </button>
                            </form>

                            <form>
                                <input type="number" id="number" className="form-control" value={quantity} min={1} onChange={verifyQuantity} />
                            </form>

                            {/* Increase Quantity Button */}
                            <form className="d-flex justify-content-center align-items-center" action='/removeProduct' method='post'>
                                <button className="btn btn-outline-success btn-sm ms-1 p-0" onClick={increaseValue} >
                                    <AddIcon />
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Price */}
                    <div className="d-flex flex-column justify-content-center align-items-center col-3">
                        <h6><b>Price</b></h6>
                        <p className='m-0'>$ {props.Price * quantity}</p>
                    </div>

                    {/* Button */}
                    <form className="d-flex justify-content-center align-items-center" action='/removeProduct' method='post'>
                        <input className='d-none' type="text" id='myProduct' defaultValue={props._id} name="product"></input>

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
}

export default Single_Cart_Item