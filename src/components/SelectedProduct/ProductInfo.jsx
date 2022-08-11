import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"

import Modal from '../Common_Components/Modal';

import PageTitle from "../Common_Components/PageTitle"
import Image from '../../pages/Image'
import Card from '../../newComponents/productsPage/card/card';
import Rating from '@mui/material/Rating';

const ProductInfo = () => {
    const navigate = useNavigate()

    const [ID, productID] = useState("")
    const [products, setProducts] = useState([])
    var myCount = 0;
    var itemPrice= 0;

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

    console.log("Product ID is: "+ ID);

    //  Post Data to add to cart
    const postData = async (event) => {
        event.preventDefault()
        // Using object destructuring for: productID= product.productID
        // const { productID, Price } = products[0]
        const productID= ID
        const Price= itemPrice
        // console.log("Price is: "+ Price);

        const res = await fetch("/AddToCart", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            // Converting JSON to string since our backend cannot understand JSON
            //  The string will be sent as body
            body: JSON.stringify({
                //  Uisng object destructuring for productID= productID
                productID, Price
            })
        })

        const data = await res.json()

        if (data.status === 200) {
            navigate("/cart")
        }
        else {
            window.alert("Failed to add product to cart!\nTry Again.")
        }
    }

    return (
        <section className="blue-bg pt-5">
            <div className="container">

                <PageTitle
                    title="Product Info"
                    desc=""
                ></PageTitle>

                <div className="white-bg p-5">

                    <div className="row">

                        {
                            // Among all the products, mapping only the product whose ID matches the ID of our selected Product.
                            products.map((contents) => {

                                if (contents._id === ID) {
                                    itemPrice= contents.Price

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

                                                    <div><h5>₹ {contents.Price}</h5></div>
                                                    
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

                                                <div className='d-flex justify-content-between pt-4'>
                                                    <Modal
                                                        btnTitle= "Buy Now" 
                                                        subTotal= {contents.Price}
                                                        totalPrice= {contents.Price}
                                                    ></Modal>

                                                    <button className="btn-normal btn-bg-green mt-4 w-100 ms-1 me-1" type="button" onClick={postData}>
                                                        Add to Cart
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