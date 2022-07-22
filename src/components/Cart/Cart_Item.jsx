import React from 'react'

const Cart_Item = () => {
    return (
        <div className="product m-5">
            <div className="row justify-content-center align-items-center">

                <div className="col-md-3">
                    <div className="product-image"><img className="img-fluid d-block mx-auto image" src="img/tech/image2.jpg" /></div>
                </div>


                <div className="col-md-5">
                    <a href="#">Lorem Ipsum dolor</a>

                    {/* Specifications */}
                    <div className="d-flex align-items-center mt-2">
                        <h6><b>Display: </b></h6>
                        <p className="ms-2 mb-auto">5 inch</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <h6><b>RAM: </b></h6>
                        <p className="ms-2 mb-auto">4GB</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <h6><b>Memory: </b></h6>
                        <p className="ms-2 mb-auto">32GB</p>
                    </div>

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
                        <p>$120</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cart_Item