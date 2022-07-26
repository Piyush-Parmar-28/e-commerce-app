import React, { useEffect, useState } from 'react'

import PageTitle from '../Common_Components/PageTitle'
import SortProducts from './SortProducts'
import Filter_Products from './Filter_Products'
import Catalog_Image from './Catalog_Image'

const Products = (props) => {
    const [allProducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/get").then(data => data.json()).then(myData => {
            setProducts(myData)
            setAllProducts(myData)
        })
    }, [])

    function filterElectronics(){
        setProducts(allProducts.filter(data=>data.Category=='electronics'))
    }
    function filterFurniture(){
        setProducts(allProducts.filter(data=>data.Category=='furniture'))
    }
    function filterFashion(){
        setProducts(allProducts.filter(data=>data.Category=='fashion'))
    }
    function filterKitchen(){
        setProducts(allProducts.filter(data=>data.Category=='kitchen'))
    }
    function filterHomeDecor(){
        setProducts(allProducts.filter(data=>data.Category=='homeDecor'))
    }
    function getAll(){
        setProducts(allProducts)
    }

    return (
        <main className="page catalog-page">
            <section className="clean-block clean-catalog pt-0 ">
                <div className="container px-0">

                    <PageTitle
                        title="Catalog"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
                    ></PageTitle>

                    <SortProducts></SortProducts>

                    <div className="content white-bg">
                        <div className="row">

                            {/* Filter Products */}
                            <Filter_Products onElectronics={filterElectronics} onAll={getAll} onKitchen={filterKitchen} onFurniture={filterFurniture} onFashion={filterFashion} onHomeDecor={filterHomeDecor}></Filter_Products>

                            {/* Products Section */}
                            <div className="col-8 col-md-9">

                                <div className="p-4">

                                    {/* Catalog Images */}
                                    <div className="row g-3">

                                        {
                                            products.map((contents) => {

                                                return (
                                                    <Catalog_Image
                                                        key= {contents._id}
                                                        myImageID= {contents.ImageID}
                                                        starValue= {contents.Ratings}
                                                        productName= {contents.Product}
                                                        itemPrice= {contents.Price}
                                                    />
                                                )

                                            })
                                        }
                                    </div>

                                    {/* Pagination */}
                                    {/* <ul className="pagination mt-3">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                            </a>
                                        </li>

                                        <li className="page-item active">
                                            <a className="page-link" href="#">1</a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>

                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span>
                                            </a>
                                        </li>
                                    </ul> */}

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Products