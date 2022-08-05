import React from "react";
import PageTitle from "../Common_Components/PageTitle";

const min = 1
function setQuantity(event) {
    event.target.value = Math.max(min, event.target.value)
}

const AddProducts = (props) => {

    return (
        <main>
            <section className="extra-padding dark-bg">
                <div className="container">
                    <PageTitle
                        title="Add Products"
                        desc="Insert Product Details..."
                    ></PageTitle>

                    {/* In forms, 'name' field is very Important, because it is used in 'req.body.' while connecting to database */}
                    <form
                        method="post"
                        className="form-style"
                        encType="multipart/form-data"
                        action="/addProduct"
                    >
                        <div className="row">
                            <div className="mb-3 d-flex flex-column">
                                <label>
                                    <strong>Product Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jacket"
                                    name="product"
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3 d-flex flex-column">
                                    <label>
                                        <b>Category</b>
                                    </label>
                                    <select className="form-select" name="category">
                                        <option value="furniture">Furniture</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="fashion">Fashion</option>
                                        <option value="kitchen">kitchen</option>
                                        <option value="sports">Sports</option>
                                        <option value="study">Study</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3 d-flex flex-column">
                                    <label>
                                        <b>Price ($) </b>
                                    </label>
                                    <input
                                        className="item"
                                        type="number"
                                        placeholder="$20"
                                        name="price"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3 d-flex flex-column">
                                    <label>
                                        <b>Stock</b>
                                    </label>
                                    <input
                                        className="item"
                                        type="number"
                                        min={1}
                                        placeholder="Available Quantity"
                                        name="stock"
                                        onChange={setQuantity}
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3 d-flex flex-column">
                                    <label>
                                        <b>Brand</b>
                                    </label>
                                    <input
                                        className="item"
                                        type="text"
                                        placeholder="Dell"
                                        name="brand"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="mb-3 d-flex flex-column">
                                    <label>
                                        <b>Ratings</b>
                                    </label>
                                    <input
                                        className="item"
                                        type="number"
                                        min={0}
                                        max={5}
                                        step={0.5}
                                        id="phone"
                                        name="ratings"
                                        placeholder="0 to 5"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="mb-3 d-flex flex-column">
                                    <label>
                                        <b>Offers (% Off)</b>
                                    </label>
                                    <input
                                        className="item"
                                        type="number"
                                        name="offers"
                                        placeholder="50% Off"
                                        min={10}
                                        max={100}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="mb-3 d-flex flex-column">
                                <label>
                                    <b>Tags</b>
                                </label>
                                <input
                                    className="item"
                                    type="text"
                                    placeholder="Laptop, Computer, ..."
                                    name="tags"
                                />
                            </div>
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <b>Image</b>

                            <input type="file" id="file" name="image" placeholder="select image" accept="image/png, image/jpeg" />
                        </div>

                        <div className="mb-3 d-flex flex-column">
                            <label>
                                <b>Description</b>
                            </label>

                            <textarea
                                name="desc"
                                cols="30"
                                rows="2"
                                placeholder="Product Description Here"
                            ></textarea>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn-normal" type="submit">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AddProducts;
