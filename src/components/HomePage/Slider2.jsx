import React from "react";
import { sliderData } from "../../Data"

const Slider2 = () => {

    return (
        <div id="carouselExampleControls" className="carousel slide"  data-ride="carousel" >

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img className="d-block w-100" src="img/slider/7.png" alt="First slide" />
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