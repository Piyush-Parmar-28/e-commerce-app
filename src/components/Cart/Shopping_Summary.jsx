import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Shopping_Summary = () => {
    const [totalPrice,setTotalPrice] = useState('')

    useEffect(()=>{
        axios('/total').then((data)=>{
            setTotalPrice(data.data)
        })
    },[])


    return (
        <div className="greenish-bg mt-4 p-4">

            <h2 className="d-flex justify-content-center">Order Summary</h2>

            <div className="card-style mt-4 ">

                {/* Sub-Total */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Subtotal</h5>
                    </div>

                    <div>
                        <p>{totalPrice}</p>
                    </div>
                </div>

                {/* Discount */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Discount</h5>
                    </div>

                    <div>
                        <p>$0</p>
                    </div>
                </div>

                {/* Shipping Amount */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>Shipping</h5>
                    </div>

                    <div>
                        <p>$0</p>
                    </div>
                </div>

                <hr></hr>

                {/* Total Amount */}
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="text-primary">Total</h5>
                    </div>

                    <div>
                        <p>{totalPrice}</p>
                    </div>
                </div>

                {/* Buy Button */}
                <button className="btn btn-primary mt-4 w-100" type="button">Buy</button>
            </div>

        </div>
    )
}

export default Shopping_Summary