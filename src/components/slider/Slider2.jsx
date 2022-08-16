import React from "react";
import { sliderData } from "../../Data"

const Slider2 = () => {

    return (
        <div id="carouselExampleControls" className="carousel slide" style={{ height: 'calc(80*(9/25)*1vw)', overflow: 'hidden' }} data-ride="carousel" >

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://realkart.in/images/home/slide-2.jpg" alt="First slide" />
                </div>

                {
                    sliderData.map((contents) => {
                        return (
                            <div className="carousel-item" key={contents.id}>
                                <img className="d-block w-100" src={contents.src} alt="First slide" />
                            </div>
                        )
                    })
                }

            </div>

            {/* Carousel Buttons */}
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>
    )
}

export default Slider2