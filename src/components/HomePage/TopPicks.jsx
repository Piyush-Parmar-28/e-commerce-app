import React, { useState, useEffect } from 'react'
import axios from "axios"

import TopPick_Card from './TopPick_Card'
import PageTitle from '../Common_Components/PageTitle'

const TopPicks = () => {

    var [topOffers, setTopOffers] = useState([])

    useEffect(() => {
        axios.get('/allProducts').then(res => {
            var products = []
            for (let i = 1; i <= 12; i++) {
                //  Getting the data at the index
                //  Minus implies index from the end
                if (!res.data.at(-i)) break
                products.push(res.data.at(-i))
            }
            // console.log(products);
            
            setTopOffers(products)
        })
    }, [])


    return (
        <div>
            <PageTitle
                title="Top Picks"
                desc="Explore to top picks just for you!!"
            ></PageTitle>

            <div className="row g-0 m-4">
                {
                    topOffers.map((contents) => {
                        return (

                            <TopPick_Card
                                key={contents._id}
                                productID= {contents._id}
                                imgID={contents.ImageID}
                                name= {contents.Product.toLowerCase()}
                            ></TopPick_Card>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default TopPicks