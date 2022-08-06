import React, { useState, useEffect, Fragment } from 'react'

import PageTitle from "../Common_Components/PageTitle"
import Image from '../../pages/Image'
import Card from '../../newComponents/productsPage/card/card';
import Rating from '@mui/material/Rating';
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ProductInfo = () => {

    const [ID, productID] = useState("")
    const [products, setProducts] = useState([])
    var myCount = 0;

    useEffect(() => {
        //  window.location.search is used here to get the query (productID here) from the URL
        // console.log("url is: " + window.location.search);
        var myUrl = window.location.search;
        var arr = myUrl.split("=")
        productID(arr[1])

        fetch(`/selected/${arr[1]}`).then(data => data.json()).then(myData => {
            setProducts(myData)
        })

    }, [])


    return (
        <section className="blue-bg pt-5">
            <div className="container">

                <PageTitle
                    title="Product Info"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
                ></PageTitle>

                <div className="white-bg p-5">

                    <div className="row">

                        {
                            products.map((contents) => {

                                if (contents._id === ID) {
                                    return (
                                        <div key={contents._id} className="d-flex justify-content-between">
                                            {/* Image Gallery */}
                                            <div className="col-md-5 box">

                                                <div className='p-5'>
                                                    <Image
                                                        photoID={contents.ImageID}
                                                    ></Image>
                                                </div>
                                                <div className='d-flex justify-content-between mt-2 ps-4 pe-4'>
                                                    <Rating name="read-only" size="small" precision={0.5} value={4} readOnly />

                                                    <div><h5>$ {contents.Price}</h5></div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="col-md-5">
                                                <div className='d-flex justify-content-center '>
                                                    <h3 className='heading'>{contents.Product}</h3>
                                                </div>

                                                <div className="m-2 p-2 box">
                                                    <p>{contents.Desc}</p>
                                                </div>

                                                <div className='d-flex justify-content-around pt-4'>
                                                    <button className="btn-normal btn-small" type="button">
                                                        <AttachMoneyIcon></AttachMoneyIcon>
                                                        Buy Now
                                                    </button>

                                                    <button className="btn-icon btn-bg-green btn-small" type="button">
                                                        <AddIcon />
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                }

                            })
                        }
                    </div>

                    {/* Related Products */}
                    <div className="clean-related-items mt-5 pt-4">
                        <h3 className="d-flex justify-content-center heading">Related Products</h3>

                        <div className="items row g-3">

                            {
                                products.map((contents) => {
                                    if (contents._id != ID && myCount < 4) {
                                        myCount++;

                                        return (
                                            <Card
                                                key={contents._id}
                                                name={contents.Product}
                                                productID={contents._id}
                                                ratings={contents.Ratings}
                                                price={contents.Price}
                                                imageID={contents.ImageID}
                                            ></Card>
                                        )
                                    }
                                })
                            }

                        </div>
                    </div>

                </div>

                {/* Extra Div for padding at bottom */}
                <div className='pt-5'></div>
            </div>
        </section>
    )
}

export default ProductInfo