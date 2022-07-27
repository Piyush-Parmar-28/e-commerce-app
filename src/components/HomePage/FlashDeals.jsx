import React, { useEffect, useState } from 'react'
import PageTitle from "../Common_Components/PageTitle"
import FlashCard from './FlashCard';
import axios from 'axios';

// Material UI
import Fab from '@mui/material/Fab';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


const FlashDeals = () => {

    //  The display status class will make the item disappear when the width is small.
    //  It is because, it is set to display only for "large-block" width. Else, it is set to "display none".
    var [displayStatus, setDisplayStatus] = useState("d-none d-lg-block card ms-2 me-2");

    var [flashData, setFlashData]= useState([])
    var url= "https://free-store-api.herokuapp.com/offers"
    
    useEffect( ()=>{
        axios.get(url).then(res => {
            setFlashData(res.data)
        })
    }, [] )

    // console.log("flashData: "+ flashData);

    return (
        <div className="mb-5">

            <PageTitle
                title="Flash Deals"
                desc="Explore the Flash Deals of This Season!!"
            ></PageTitle>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <div className="d-flex justify-content-evenly dark-bg">
                            {
                                flashData.map((contents) => {

                                    var myClass;
                                    if (contents.id == 1) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            displayStatus= {contents.id > 4 ? "none" : ""}
                                            key={contents.id}
                                            title={contents.item}
                                            Imgsrc={contents.image}
                                        ></FlashCard>

                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="d-flex justify-content-evenly dark-bg">
                            {
                                flashData.map((contents) => {

                                    var myClass;
                                    if (contents.id == 5) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            displayStatus= {contents.id > 4 && contents.id < 9 ? "" : "none"}
                                            key={contents.id}
                                            title={contents.item}
                                            Imgsrc={contents.image}
                                        ></FlashCard>

                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="d-flex justify-content-evenly dark-bg">
                            {
                                flashData.map((contents) => {

                                    var myClass;
                                    if (contents.id == 9) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            displayStatus= {contents.id > 8 && contents.id <13 ? "" : "none"}
                                            key={contents.id}
                                            title={contents.item}
                                            Imgsrc={contents.image}
                                        ></FlashCard>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <Fab size="small" color="secondary" aria-label="add">
                        <ArrowBackIosSharpIcon />
                    </Fab>
                </div>

                <div className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <Fab size="small" color="secondary" aria-label="add" >
                        <ArrowForwardIosSharpIcon />
                    </Fab>
                </div>

            </div>
        </div>

    )
}

export default FlashDeals