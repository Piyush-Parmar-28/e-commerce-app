import React, { useState, useEffect } from 'react'
import Single_Cart_Item from "./Single_Cart_Item"

const All_Cart_Items = (props) => {

    const productURL = `/getProduct/${props.itemID}`
    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch(productURL).then(data => data.json()).then(myData => {
            // Converting myData to array so that it can be mapped
            setProductData([myData])
        })

    }, [])

    return (

        <div className="m-4 p-4 box">
            <div className="row justify-content-center align-items-center">

                {
                    productData.map(contents => {

                        return (
                            <Single_Cart_Item 
                                key= {contents._id}
                                _id= {contents._id}
                                ImageID= {contents.ImageID}
                                Product= {contents.Product}
                                Desc= {contents.Desc}
                                quantity= {props.quantity}
                                Price= {contents.Price}
                                Brand= {contents.Brand}
                            />
                        )

                    })
                }

            </div>
        </div>
    )
}

export default All_Cart_Items