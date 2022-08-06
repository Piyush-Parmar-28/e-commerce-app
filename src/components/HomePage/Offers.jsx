import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageTitle from "../Common_Components/PageTitle"

const Offers = () => {

    var url = "https://free-store-api.herokuapp.com/offers"
    var [offers, setOffers] = useState([])

    useEffect(() => {
        axios.get(url).then(res => {
            setOffers(res.data)
        })
    })

    return (

        <div className="container">
            <PageTitle
                title="Exclusive Offers"
                desc="Check out the amazing offers!!"
            />

            <div className="row">

                {
                    offers.map((contents) => {
                        return (
                            <div key={contents.id} className="col-md-6 col-lg-4" style={{ display: contents.id > 6 ? "none" : "" }}>
                                <div className="card border-0">
                                    <a href="#">
                                        <img className="card-img-top scale-on-hover" src={contents.image} alt="{contents.altText}" />
                                    </a>

                                    <div className="card-body blue-bg">
                                        <h6 className='d-flex justify-content-center'>
                                            <a href="#" className="simpleText">{contents.item}</a>
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