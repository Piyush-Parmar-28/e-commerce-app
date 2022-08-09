import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Modal from '../Common_Components/Modal'

const Shopping_Summary = (props) => {
    const [totalPrice,setTotalPrice] = useState('')

    useEffect(()=>{
        axios('/total').then((data)=>{
            setTotalPrice(data.data)
        })
    },[])


    return (
        <div className="mt-4 p-4">

            <h2 className="d-flex justify-content-center heading">Order Summary</h2>

            <div className="form-style mt-4 ">

                {/* Sub-Total */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Subtotal</h5>
                    </div>

                    <div>
                        <p>$ {totalPrice}</p>
                    </div>
                </div>

                {/* Discount */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Discount</h5>
                    </div>

                    <div>
                        <p>$ 0</p>
                    </div>
                </div>

                {/* Shipping Amount */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Shipping</h5>
                    </div>

                    <div>
                        <p>FREE</p>
                    </div>
                </div>

                <hr></hr>

                {/* Total Amount */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className='red-color'>Total</h5>
                    </div>

                    <div>
                        <p>$ {totalPrice}</p>
                    </div>
                </div>

                {/* Buy Button */}
                {/* <button className="btn-normal mt-4 w-100" type="button">Buy</button> */}
                <Modal
                    btnTitle= "Buy"
                    subTotal= {totalPrice}
                    totalPrice= {totalPrice}

                    clearCartfunc2= {props.clearCartfunc1}
                ></Modal>
            </div>

        </div>
    )
}

export default Shopping_Summary