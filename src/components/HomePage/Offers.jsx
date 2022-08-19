import React from 'react'
import { Link } from "react-router-dom"
import PageTitle from "../Common_Components/PageTitle"
import { offersData } from "../../Data"

const Offers = () => {

    return (

        <div className="container">
            <PageTitle
                title="Exclusive Offers"
                desc="Check out the amazing offers!!"
            />

            <div className="row">

                {
                    offersData.map((contents) => {
                        return (
                            <div key={contents.id} className="col-md-6 col-lg-4">
                                <div className="card border-0">
                                    <Link to={`/products?item=${contents.tag}`} className='description text-black' style={{ textDecoration: "none" }}>

                                        <img className="card-img-top scale-on-hover" src={contents.src} alt="{contents.altText}" />
                                    </Link>

                                    <div className="card-body blue-bg">
                                        <h6 className='d-flex justify-content-center'>
                                            <Link to={`/products?item=${contents.tag}`} className='description text-black' style={{ textDecoration: "none" }} class='text-black'>
                                                <h4>{contents.label}</h4>
                                            </Link>
                                        </h6>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default Offers