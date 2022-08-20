import React from 'react'

// import Navbar from '../components/Common_Components/Navbar'
import Navbar2 from '../components/Common_Components/Navbar2'
import Offers from '../components/HomePage/Offers'
import Categories from '../components/HomePage/Categories'
import Masters_ContactMe from '../components/HomePage/Masters_ContactMe'
import FlashDeals from '../components/HomePage/FlashDeals'
import TopPicks from '../components/HomePage/TopPicks'
import Slider2 from '../components/HomePage/Slider2'
import { sliderData,sliderData2 } from "../Data"


const Home = () => {
    return (
        <div className= "blue-bg">
            <Navbar2></Navbar2>
            <Slider2 id='big' active='7.png' reff='carouselExampleControls' data={sliderData}></Slider2>
            <Slider2 id='small' active='8.png' data={sliderData2} reff='carouselExampleControls2'></Slider2>
            <Categories></Categories>
            <TopPicks></TopPicks>
            <FlashDeals></FlashDeals>
            <Offers></Offers>
            <Masters_ContactMe></Masters_ContactMe>
        </div>
    )
}

export default Home