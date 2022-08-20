import React, { Fragment, useState, useEffect } from "react";

import PageTitle from "../Common_Components/PageTitle";
import style from "./products.module.css";
import Card from "./card/card";
import Filter_Products from "./Filter_Products2";

const Productss = () => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])

    if (window.location.search == '') window.location.href = '/';

    const urlString = window.location.search.trim().toLowerCase()
    const myCategory = urlString.substring(6)   // Substring starting at index 6, because of "?item="

    useEffect( () => {

        fetch(`SearchProducts${window.location.search.trim().toLowerCase()}`).then(data => data.json()).then(myData => {
            
            setProducts(myData)
            setAllProducts(myData)

            //  Filtering products based on category if we have searched using Category in home page
            if (myCategory === "electronics") {
                //  Here, we cannot just call filterElectronics(), nor we can use 'setProducts' directly, because at this time 'setProducts' would not have been set. 

                setProducts(myData.filter(data => data.Category === 'electronics'))
            }

            else if (myCategory === "study") {
                setProducts(myData.filter(data => data.Category === 'study'))
            }

            else if (myCategory === "fashion") {
                setProducts(myData.filter(data => data.Category === 'fashion'))

            }

            else if (myCategory === "kitchen") {
                setProducts(myData.filter(data => data.Category === 'kitchen'))

            }

            else if (myCategory === "beauty") {
                setProducts(myData.filter(data => data.Category === 'beauty'))

            }

            else if (myCategory === "sports") {
                setProducts(myData.filter(data => data.Category === 'sports'))

            }

            else if (myCategory === "toys") {
                setProducts(myData.filter(data => data.Category === 'toys'))

            }

            else if (myCategory === "home") {
                setProducts(myData.filter(data => data.Category === 'home'))
            }
        })

    }, [])


    //  Filter functions based on categories
    function getAll() {
        setProducts(allProducts)
    }

    function filterElectronics() {
        setProducts(allProducts.filter(data => data.Category === 'electronics'))
    }
    function filterStudy() {
        setProducts(allProducts.filter(data => data.Category === 'study'))
    }
    function filterFashion() {
        setProducts(allProducts.filter(data => data.Category === 'fashion'))
    }
    function filterKitchen() {
        setProducts(allProducts.filter(data => data.Category === 'kitchen'))
    }
    function filterBeauty() {
        setProducts(allProducts.filter(data => data.Category === 'beauty'))
    }
    function filterSports() {
        setProducts(allProducts.filter(data => data.Category === 'sports'))
    }
    function filterToys() {
        setProducts(allProducts.filter(data => data.Category === 'toys'))
    }
    function filterHomeDecor() {
        setProducts(allProducts.filter(data => data.Category === 'home'))
    }

    const render = products.map((data) =>
        <Card
            key={data._id}
            name={data.Product}
            productID={data._id}
            ratings={data.Ratings}
            price={data.Price}
            imageID={data.ImageID}
        ></Card>
    )

    return (
        <Fragment>
            <div className={style.outter_div}>

                <div className={style.left_div}>

                    <Filter_Products
                        onAll={getAll}

                        onElectronics={filterElectronics}
                        onStudy={filterStudy}
                        onFashion={filterFashion}
                        onKitchen={filterKitchen}
                        onBeauty={filterBeauty}
                        onSports={filterSports}
                        onToys={filterToys}
                        onHomeDecor={filterHomeDecor}
                    ></Filter_Products>
                </div>

                <div className={style.right_div}>

                    <div className={style.right_inner_div}>
                        <PageTitle
                            title="Explore Products"
                            desc="Explore all your searched products here!"
                        />

                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            {render}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Productss;
