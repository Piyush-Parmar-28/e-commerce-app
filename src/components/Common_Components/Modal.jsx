import React, { Fragment, useState } from 'react'

const Modal = (props) => {

    const [buyText, setBuyText]= useState("Buy")
    const [displayStyle, setDisplayStyle] = useState("none")
    const [boxStyle, setBoxStyle] = useState("none")

    const displayModal = () => {
        setDisplayStyle("block")
    }

    const closeModal = () => {
        setDisplayStyle("none")
    }

    const displayBox = () => {
        setBuyText("Purchasing Items...")

        //  Setting what to do after 1500 ms time
        setTimeout( () =>{
            setBuyText("Items Purchased!")
            setBoxStyle("block")
        }, 1500 )

        props.clearCartfunc2();
    }

    return (
        <Fragment>
            <button className='btn-normal mt-4 w-100 ms-1 me-1' onClick={displayModal}>{props.btnTitle}</button>

            <div className="modal " style={{ display: displayStyle }}>

                <div className="modal-content form-style pt-2">
                    
                    <h2 className='text-center red-color heading mt-4'>Proceed To Buy...</h2>

                    {/* Sub-Total */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>Subtotal</h5>
                        </div>

                        <div>
                            <p>₹ {props.subTotal}</p>
                        </div>
                    </div>

                    {/* Discount */}
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>Discount</h5>
                        </div>

                        <div>
                            <p>₹ 0</p>
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
                            <p>₹ {props.totalPrice}</p>
                        </div>
                    </div>

                    {/* Buy & Close Button */}
                    <div className='d-flex justify-content-between'>
                        <button 
                            className="btn-normal mt-4 w-50 me-3" 
                            type="button" 
                            onClick={displayBox}
                            style= { buyText=== "Items Purchased!" ? {background: "#01966e"} : {background: "#e1775d"} }
                        >{buyText}</button>

                        <button className="ms-3 btn-normal btn-bg-grey mt-4 w-50" type="button" onClick={closeModal}>Close</button>
                    </div>

                    <div className='box-red mt-4' style={{ display: boxStyle }}>
                        <h4 className='text-center heading mt-2'><b>Order Placed!</b></h4>
                        <h6 className='text-center'>
                            Items will reach to you within 3 days.
                            <br></br>
                            <b>Happy Shopping!!</b>
                        </h6>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Modal