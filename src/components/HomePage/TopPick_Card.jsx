import React from 'react'
import {Link} from "react-router-dom"
import Image from "../../pages/Image"

const TopPick_Card = (props) => {
    return (
        <div className="col-6 col-lg-2 px-2" >
            <div className="card mb-3">
                <div className="row">

                    <div className="col-12">
                        <Link to={`/selected?selectedProduct=${props.productID}`}>
                            <Image
                                photoID={props.imgID}
                            ></Image>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default TopPick_Card