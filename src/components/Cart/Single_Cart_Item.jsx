import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Image from '../../pages/Image'

import style from "./Cart.module.css"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Single_Cart_Item = (props) => {
    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(props.quantity)

    const min = 1;
    const verifyQuantity = async (event) => {
        event.target.value = Math.max(min, event.target.value)
        setQuantity(event.target.value)
    }

    // Increase Value Function
    const increaseValue = async (event) => {
        // event.preventDefault()

        setQuantity(quantity + 1)
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
        // event.preventDefault()
        setQuantity(quantity - 1)
        const myProductID = props._id

        const res = await fetch("/removeOneFromCart", {
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

        const data = await res.json()

        if (data.status === 200) {
            navigate("/cart")
        }
        else {
            window.alert("Failed to remove from cart!\nTry Again.")
        }
    }

    return (
        <Fragment key={props._id}>

            <div className={`d-flex ${style.justify_complete} ${style.cartWrap}`}>

                {/* Image & Desc Section */}
                <div className={`d-flex ${style.justify_part1}`}>

                    <div className='d-flex flex-column'>
                        <Image photoID={props.ImageID} ></Image>

                        <Link to={"/selected?selectedProduct=" + props._id} className= "d-flex justify-content-center" style={{textDecoration : "none"}}>
                            <button className="btn-normal mt-3">View Product</button>
                        </Link>

                    </div>

                    <div className='ms-5 d-flex justify-content-center align-items-center'>
                        <table>
                            <tbody>
                                <tr>
                                    <th className='box text-center p-2'><h5 className='m-0'>Product</h5></th>
                                    <th className='box text-center p-2'><h5 className='m-0'>Brand</h5></th>
                                </tr>

                                <tr>
                                    <td className='box text-center p-2'>{props.Product}</td>
                                    <td className='box text-center p-2'>{props.Brand}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Quantity, Price & Remove Section */}
                <div className={`d-flex ${style.justify_part2}`}>

                    {/* Quantity */}
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h5>Quantity</h5>

                        <div className='d-flex justify-content-center align-items-center'>
                            {/* Decrease Quantity Button */}
                            <form className="d-flex justify-content-center align-items-center" action='/removeProduct' method='post'>
                                <button className="btn-icon btn-bg-red btn-xsmall me-1 p-0" onClick={decreaseValue} >
                                    <RemoveIcon />
                                </button>
                            </form>

                            <input className='width-40' type="number" id="number" value={quantity} min={1} onChange={verifyQuantity} />

                            {/* Increase Quantity Button */}
                            <form className="d-flex justify-content-center align-items-center" action='/removeProduct' method='post'>
                                <button className="btn-icon btn-bg-green btn-xsmall ms-1 p-0" onClick={increaseValue} >
                                    <AddIcon />
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Price */}
                    <div className="d-flex flex-column justify-content-center align-items-center col-3">
                        <h5>Price</h5>
                        <p className='m-0'>$ {props.Price * quantity}</p>
                    </div>

                    {/* Delete Button */}
                    <form className="d-flex justify-content-center align-items-center col-3" action='/removeProduct' method='post'>
                        <input className='d-none' type="text" id='myProduct' defaultValue={props._id} name="product"></input>

                        <button type="submit" className="btn-icon btn-bg-red btn-small">
                            <DeleteIcon />
                        </button>

                    </form>

                </div>

            </div>

        </Fragment>
    )
}

export default Single_Cart_Item