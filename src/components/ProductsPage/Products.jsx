import React, { useEffect, useState } from 'react'

import PageTitle from '../Common_Components/PageTitle'
import Filter_Products from './Filter_Products'
// import Catalog_Image from './Catalog_Image'
import Card from "../../newComponents/productsPage/card/card"

const Products = (props) => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    if (window.location.search == '') window.location.href = '/';
    
    useEffect(() => {
        fetch(`SearchProducts${window.location.search.toLowerCase()}`).then(data => data.json()).then(myData => {
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
    function filterSports() {
        setProducts(allProducts.filter(data => data.Category === 'sports'))
    }
    function filterStudy() {
        setProducts(allProducts.filter(data => data.Category === 'study'))
    }
    function getAll() {
        setProducts(allProducts)
    }

    return (
        <div className="container mt-4">

            <PageTitle
                title="Products"
                desc="Explore all products here."
            ></PageTitle>

            <div className="white-bg">
                <div className="row">

                    {/* Filter Products */}
                    <Filter_Products
                        onElectronics={filterElectronics}
                        onAll={getAll}
                        onKitchen={filterKitchen}
                        onFurniture={filterFurniture}
                        onFashion={filterFashion}
                        onSports={filterSports}
                        onStudy={filterStudy}
                    ></Filter_Products>

                    {/* Products Section */}
                    <div className="col-8 col-md-9">

                        <div className="p-4">

                            {/* Catalog Images */}
                            <div className="row g-3">

                                {
                                    products.map((contents) => {

                                        return (
                                            <Card
                                                key={contents._id}
                                                productID={contents._id}
                                                imageID={contents.ImageID}
                                                ratings={contents.Ratings}
                                                name={contents.Product}
                                                price={contents.Price}
                                            />
                                        )

                                    })
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products