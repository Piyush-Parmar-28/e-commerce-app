import React, { useState, useEffect } from 'react'
import axios from "axios"

import PageTitle from "../Common_Components/PageTitle"

const Categories = () => {

    const url = "https://free-store-api.herokuapp.com/categories"

    var [category, setCategory]= useState([])

    useEffect( ()=>{
        axios.get(url).then(res => {
            setCategory(res.data)
        })
    }, [] )

    return (
        <main className="page projets-page dark-bg">
            <section className="portfolio-block projects compact-grid pt-5 pb-5">

                <PageTitle
                    title="Categories"
                    desc="Explore various categories!!"
                ></PageTitle>

                <div className="row g-0">

                    {
                        category.map((contents) => {

                            return (
                                <div key= {contents.id} className="col-6 col-lg-4 item1 zoom-on-hover1 position-relative pb-0" style={{display: contents.id > 6 ? "none" : "" }}>
                                    <a href="#">
                                        <img className="img-fluid image cover-image" src={contents.image} alt="{contents.altText}" />
                                        <span className="info">
                                            <span className="info-heading">contents.label</span>
                                            <span className="info-body">contents.desc</span>
                                        </span>
                                    </a>
                                </div>
                            )

                        })
                    }

                </div>
            </section>
        </main>
    )
}

export default Categories