import React, {useState, useEffect} from 'react'
import axios from "axios"

import TopPick_Card from './TopPick_Card'
import PageTitle from '../Common_Components/PageTitle'

const TopPicks = () => {
    const url = "https://free-store-api.herokuapp.com/offers"

    var [topOffers, setTopOffers]= useState([])

    useEffect( ()=>{
        axios.get(url).then(res => {
            setTopOffers(res.data)
        })
    }, [] )

    return (
        <div>
            <PageTitle
                title="Top Picks"
                desc="Explore to top picks just for you!!"
            ></PageTitle>

            <div className="row g-0 m-5">
                {
                    topOffers.map( (contents)=>{
                        return(
                            <TopPick_Card
                                key= {contents.id}
                                displayStatus= {contents.id > 8 ? "none" : ""}
                                imgSrc= {contents.image}
                                myItem= {contents.item}
                            ></TopPick_Card>
                        )
                    } )
                }
            </div>

        </div>
    )
}

export default TopPicks