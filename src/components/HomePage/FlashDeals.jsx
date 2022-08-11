import React, { useEffect, useState } from 'react'
import PageTitle from "../Common_Components/PageTitle"
import FlashCard from './FlashCard';

// Material UI
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';


const FlashDeals = () => {

    //  The display status class will make the item disappear when the width is small.
    //  It is because, it is set to display only for "large-block" width. Else, it is set to "display none".
    var [displayStatus, setDisplayStatus] = useState("d-none d-lg-block card ms-2 me-2");

    var [flashData, setFlashData] = useState([])

    useEffect(() => {
        fetch("/get").then(data => data.json()).then(myData => {
            // console.log(myData)
            setFlashData(myData)
        })
    }, [])

    // console.log("flashData: "+ flashData);
    var productsDisplayed1 = 0;
    var productsDisplayed2 = 0;
    var productsDisplayed3 = 0;

    return (
        <div className="mb-5">

            <PageTitle
                title="Flash Deals"
                desc="Explore the Flash Deals of This Season!!"
            ></PageTitle>

            <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <div className="d-flex justify-content-evenly blue-bg">
                            {
                                flashData.map((contents) => {

                                    var myClass;
                                    if (productsDisplayed1 == 1) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }
                                    productsDisplayed1++

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            displayStatus={productsDisplayed1 > 4 ? "none" : ""}
                                            key={contents._id}
                                            productID={contents._id}
                                            title={contents.Product}
                                            ImageID={contents.ImageID}
                                            Ratings={contents.Ratings}
                                            Price={contents.Price}
                                        ></FlashCard>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="d-flex justify-content-evenly blue-bg">
                            {
                                flashData.map((contents) => {

                                    var myClass;
                                    if (productsDisplayed2 == 4) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }
                                    productsDisplayed2++

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            displayStatus={productsDisplayed2 >= 5 && productsDisplayed2 < 9 ? "" : "none"}
                                            key={contents._id}
                                            productID={contents._id}
                                            title={contents.Product}
                                            ImageID={contents.ImageID}
                                            Ratings={contents.Ratings}
                                            Price={contents.Price}
                                        ></FlashCard>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className="d-flex justify-content-evenly blue-bg">
                            {
                                flashData.map((contents) => {

                                    var myClass;
                                    if (productsDisplayed3 == 9) {
                                        myClass = displayStatus;
                                    }
                                    else {
                                        myClass = "card ms-2 me-2";
                                    }
                                    productsDisplayed3++

                                    return (
                                        <FlashCard
                                            cardClass={myClass}
                                            displayStatus={productsDisplayed3 >= 9 && productsDisplayed3 <= 12 ? "" : "none"}
                                            key={contents._id}
                                            title={contents.Product}
                                            ImageID={contents.ImageID}
                                            Ratings={contents.Ratings}
                                            Price={contents.Price}
                                        ></FlashCard>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>


                <div className="carousel-control-prev" style={{height:'fit-content',alignSelf:'center',transform:'translateY(+250%)'}} type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                    <button type="button" className="btn-icon btn-xsmall">
                        <ArrowBackIosSharpIcon />
                    </button>
                </div>

                {/* <div className= "d-flex justify-content-center align-items-center mt-auto">
                    <button className="btn-icon btn-xsmall carousel-control-prev " data-bs-target="#carouselExampleControls1" data-bs-slide="prev" style={{height: "5rem", width: "5rem"}}>
                        <ArrowBackIosSharpIcon />
                    </button>
                </div> */}

                <div className="carousel-control-next" style={{height:'fit-content',alignSelf:'center',transform:'translateY(+250%)'}} type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                    <button type="button" className="btn-icon btn-xsmall">
                        <ArrowForwardIosSharpIcon />
                    </button>
                </div>


            </div>
        </div>

    )
}

export default FlashDeals