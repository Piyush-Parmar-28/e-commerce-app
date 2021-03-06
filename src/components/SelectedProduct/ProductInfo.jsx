import React from 'react'

import PageTitle from "../Common_Components/PageTitle"
import Catalog_Image from '../ProductsPage/Catalog_Image';
import Comment from './Comment';
import Star_Rating from '../Common_Components/Star_Rating';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ProductInfo = () => {
    return (
        <main className="page product-page">
            <section className="clean-block clean-product dark-bg pt-0">
                <div className="container">

                    <PageTitle
                        title="Product Info"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
                    ></PageTitle>

                    <div className="block-content white-bg p-5">

                        <div className="product-info">
                            <div className="row">

                                {/* Image Gallery */}
                                <div className="col-md-6 dark-bg ">
                                    <div className="zoom">
                                        <div className="zoomed-image"></div>

                                        <div className="sidebar d-flex justify-content-center">
                                            <img className="img-fluid d-block small-preview" src="img/tech/image1.jpg" />
                                            <img className="img-fluid d-block small-preview" src="img/tech/image2.jpg" />
                                            <img className="img-fluid d-block small-preview" src="img/tech/image3.png" />
                                        </div>

                                    </div>
                                </div>

                                {/* Description */}
                                <div className="col-md-6">
                                    <div className='d-flex justify-content-center '>
                                        <h3>Lorem Ipsum</h3>
                                    </div>

                                    <div className='d-flex justify-content-between mt-2'>
                                        <Star_Rating></Star_Rating>
                                        <div><h5>$300.00</h5></div>
                                    </div>

                                    <hr></hr>

                                    <div className="m-2 p-2">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Vestibulum diam risus, sagittis at fringilla at, pulvinar vel risus. Vestibulum dignissim eu nulla eu imperdiet. Morbi mollis tellus a nunc vestibulum consequat. Quisque tristique elit et nibh dapibus sodales. Nam sollicitudin a urna sed iaculis.</p>
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

                            </div>
                        </div>

                        {/* <div className="product-info">
                            <div>
                                <ul className="nav nav-tabs" role="tablist" id="myTab">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" role="tab" data-bs-toggle="tab" id="description-tab" href="#description">Description</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" role="tab" data-bs-toggle="tab" id="specifications-tabs" href="#specifications">Specifications</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link" role="tab" data-bs-toggle="tab" id="reviews-tab" href="#reviews">Reviews</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">

                                    <div className="tab-pane fade show active description" role="tabpanel" id="description">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <figure className="figure"><img className="img-fluid figure-img" src="img/tech/image3.png" /></figure>
                                            </div>
                                            <div className="col-md-7">
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-7 right">
                                                <h4>Lorem Ipsum</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                            <div className="col-md-5">
                                                <figure className="figure"><img className="img-fluid figure-img" src="img/tech/image3.png" /></figure>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade specifications" role="tabpanel" id="specifications">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td><b>Display</b></td>
                                                        <td>5.2"</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>Camera</b></td>
                                                        <td>12MP</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>RAM</b></td>
                                                        <td>4GB</td>
                                                    </tr>
                                                    <tr>
                                                        <td><b>OS</b></td>
                                                        <td>iOS</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" role="tabpanel" id="reviews">
                                        <Comment></Comment>
                                        <Comment></Comment>
                                        <Comment></Comment>
                                    </div>

                                </div>
                            </div>
                        </div> */}

                        {/* Reviews (Comments) */}
                        <h3 className="d-flex justify-content-center mt-5" >Reviews</h3>
                        <Comment></Comment>
                        <Comment></Comment>
                        <Comment></Comment>

                        {/* Related Products */}
                        <div className="clean-related-items mt-5">
                            <h3 className="d-flex justify-content-center">Related Products</h3>

                            <div className="items">
                                <div className="row justify-content-center">
                                    <Catalog_Image></Catalog_Image>
                                    <Catalog_Image></Catalog_Image>
                                    <Catalog_Image></Catalog_Image>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Extra Div for padding at bottom */}
                    <div className='pt-5'></div>
                </div>
            </section>
        </main>
    )
}

export default ProductInfo