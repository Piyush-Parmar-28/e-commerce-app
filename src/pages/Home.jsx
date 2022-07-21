import React from 'react'

import Navbar from '../components/Common_Components/Navbar'
import Slider from '../components/HomePage/Slider'
import Offers from '../components/HomePage/Offers'
import Categories from '../components/HomePage/Categories'
import ContactMe from '../components/HomePage/ContactMe'
import FlashDeals from '../components/HomePage/FlashDeals'
import TopPicks from '../components/HomePage/TopPicks'
import Footer from '../components/Common_Components/Footer'


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Categories></Categories>
            <TopPicks></TopPicks>
            <FlashDeals></FlashDeals>
            <Offers></Offers>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    )
}

export default Home