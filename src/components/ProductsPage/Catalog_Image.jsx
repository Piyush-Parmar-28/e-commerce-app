import React from 'react'

import Star_Rating from '../Common_Components/Star_Rating'

const Catalog_Image = () => {
    return (
        <div className="col-12 col-lg-4">

            <div className="box p-3">
                <div className="mb-4">
                    <a href="#">
                        <img className="img-fluid d-block mx-auto" src="img/tech/image2.jpg" />
                    </a>
                </div>

                <h5 className="d-flex justify-content-center mb-3">Product Name</h5>

                <div className="d-flex justify-content-between">
                    <Star_Rating />

                    <div>
                        <h5><b>$100</b></h5>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Catalog_Image