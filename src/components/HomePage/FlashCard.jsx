import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Image from '../../pages/Image';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';

const FlashCard = (props) => {

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        productID: "",
        Price:0,
    })

    useEffect(() => {
        setProduct({ 
            productID: props.productID, 
            Price:props.Price
        })
    }, [])

    const postData = async (event) => {
        event.preventDefault()

        // Using object destructuring for: productID= product.productID

        const res = await fetch("/AddToCart", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },

            // Converting JSON to string since our backend cannot understand JSON
            //  The string will be sent as body
            body: JSON.stringify({
                //  Uisng object destructuring for productID= productID
                productID:product.productID,
                itemPrice:product.Price
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
        <div className={props.cardClass} style={{ width: "18rem", display: props.displayStatus }}>
            
            <Link to={"/selected?selectedProduct=" + props.productID}>
                <Image photoID={props.ImageID} size='10rem'></Image>
            </Link>

            <div className="p-2">

                <div className='d-flex justify-content-between'>
                    <h5 className={"black-color d-flex justify-content-center heading"}>{props.title}</h5>
                    <p className="card-text text-muted mb-0">Rs. {props.Price}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className='mt-auto'>
                        <Rating name="read-only" precision={0.5} value={props.Ratings} size="small" readOnly />
                    </div>

                    <form method="post">
                        <button type="submit" className="btn-icon btn-bg-green btn-xsmall" onClick={postData}>
                            <AddIcon />
                        </button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default FlashCard