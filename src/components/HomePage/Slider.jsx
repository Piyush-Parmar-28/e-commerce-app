import React from 'react'
import SliderImage from './SliderImage'
import { sliderData } from '../../Data'

const Slider = () => {

    // console.log(sliderData);

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            
            <div className="carousel-inner">
                {
                    sliderData.map((contents) => {
                        return (
                            <SliderImage
                                key={contents.id}
                                src={contents.src}
                                alt={contents.altText}
                                label={contents.label}
                                desc={contents.desc}
                            ></SliderImage>
                        )
                    })
                }
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider