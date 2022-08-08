import { minHeight } from "@mui/system";
import React from "react";


const Slider2 = () => {

    return <div id="carouselExampleControls" className="carousel slide" style={{ height: 'calc(70*(9/25)*1vw)', overflow: 'hidden' }} data-ride="carousel" >
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://realkart.in/images/home/slide-2.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/Jupiter_2020/V259539351_IN_PC_Laptops_Jupiter_WF_1500_combo.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="http://www.alexinternational.ro/wp-content/uploads/2016/02/BANNER-MENS-CLOTHING.jpg" alt="Third slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
}

export default Slider2