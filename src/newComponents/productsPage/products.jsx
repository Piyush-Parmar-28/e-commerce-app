import React, { Fragment, useState, useEffect } from "react";

import PageTitle from "../../components/Common_Components/PageTitle";
import style from "./products.module.css";
import Card from "./card/card";
import Filter_Products from "./Filter_Products2";

const Productss = () => {
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])
  if(window.location.search == '') window.location.href ='/';
  useEffect(() => {
      fetch(`SearchProducts${window.location.search.trim().toLowerCase()}`).then(data => data.json()).then(myData => {
          setProducts(myData)
          setAllProducts(myData)
      })
  }, [])


    function filterElectronics() {
        setProducts(allProducts.filter(data => data.Category === 'electronics'))
    }
    function filterFurniture() {
        setProducts(allProducts.filter(data => data.Category === 'furniture'))
    }
    function filterFashion() {
        setProducts(allProducts.filter(data => data.Category === 'fashion'))
    }
    function filterKitchen() {
        setProducts(allProducts.filter(data => data.Category === 'kitchen'))
    }
    function filterHomeDecor() {
        setProducts(allProducts.filter(data => data.Category === 'homeDecor'))
    }
    function getAll() {
        setProducts(allProducts)
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
                        onElectronics={filterElectronics}
                        onAll={getAll}
                        onKitchen={filterKitchen}
                        onFurniture={filterFurniture}
                        onFashion={filterFashion}
                        onHomeDecor={filterHomeDecor}
                    ></Filter_Products>
                </div>

                <div className={style.right_div}>

                    <div className={style.right_inner_div}>
                        <PageTitle
                            title="Explore"
                            desc="Explore all your searched products here!"
                        />
                        {render}
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Productss;
