import React, { useState, useEffect, Fragment } from 'react'

import PageTitle from "../Common_Components/PageTitle"
import Image from '../../pages/Image'
import Catalog_Image from '../ProductsPage/Catalog_Image';
import Comment from './Comment';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
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
        <section className="dark-bg pt-4">
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
                                        <Fragment key={contents._id}>
                                            {/* Image Gallery */}
                                            <div className="col-md-6 dark-bg">

                                                <div className='d-flex justify-content-center align-items-center mt-auto'>
                                                    <Image
                                                        photoID={contents.ImageID}
                                                        size='25rem'
                                                    ></Image>
                                                </div>

                                            </div>

                                            {/* Description */}
                                            <div className="col-md-6">
                                                <div className='d-flex justify-content-center '>
                                                    <h3>{contents.Product}</h3>
                                                </div>

                                                <div className='d-flex justify-content-between mt-2'>
                                                    <Rating name="read-only" size="small" precision={0.5} value={4} readOnly />

                                                    <div><h5>$ {contents.Price}</h5></div>
                                                </div>

                                                <hr></hr>

                                                <div className="m-2 p-2">
                                                    <p>{contents.Desc}</p>
                                                </div>

                                                <hr></hr>

                                                <div className='d-flex justify-content-around '>
                                                    <button className="btn btn-primary d-flex justify-content-between" type="button">
                                                        <AttachMoneyIcon></AttachMoneyIcon>
                                                        Buy Now
                                                    </button>

                                                    <button className="btn btn-danger d-flex justify-content-between" type="button">
                                                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                                        Add to Cart
                                                    </button>
                                                </div>

                                            </div>

                                        </Fragment>
                                    )
                                }

                            })
                        }
                    </div>

                    {/* Reviews (Comments) */}
                    <h3 className="d-flex justify-content-center mt-5" >Reviews</h3>
                    <Comment></Comment>
                    <Comment></Comment>
                    <Comment></Comment>

                    {/* Related Products */}
                    <div className="clean-related-items mt-5">
                        <h3 className="d-flex justify-content-center">Related Products</h3>

                        <div className="items row g-3">

                            {
                                products.map((contents) => {
                                    if (contents._id != ID && myCount < 3) {
                                        myCount++;

                                        return (
                                            <Catalog_Image
                                                key={contents._id}
                                                myImageID={contents.ImageID}
                                                itemPrice={contents.Price}
                                                starValue={contents.Ratings}
                                                productID={contents._id}
                                            ></Catalog_Image>
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