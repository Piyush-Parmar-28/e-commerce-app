import React, { Fragment, useEffect, useState } from 'react'
import Navbar2 from '../components/Common_Components/Navbar2'
import PageTitle from '../components/Common_Components/PageTitle';
import All_Cart_Items from '../components/Cart/All_Cart_Items';
import Shopping_Summary from '../components/Cart/Shopping_Summary';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        axios('/status').then((data)=>{
            console.log(data.data.status);
            if(!data.data.status){
                navigate('/')
            }
        })
    },[])
    var [IDs, setIDs] = useState([])

    useEffect( () => {

        fetch("/cart").then(data => data.json()).then(myData => {
            // console.log(myData)
            setIDs(myData)
        })
    }, [])




    return (
        <Fragment>
            <Navbar2></Navbar2>

                <section className="clean-block clean-cart dark-bg pt-4">
                    <div className="container">

                        <PageTitle
                            title="Shopping Cart"
                            desc="Get all your products of interset here. Proceed to buy & get FREE shipping only on 'Silver Shop'."
                        />

                        <div className="white-bg row g-0">
                            <div>
                                {
                                    IDs.length === 0 ? 
                                        <p>Nothing to display here</p> : 

                                        IDs.map(contents => {
                                            if(contents === null){
                                                return(
                                                    <p>Nothing here</p>
                                                )
                                            }
                                            else{

                                                return (
                                                    <All_Cart_Items
                                                        key= {contents._id}
                                                        itemID= {contents.productID}
                                                        quantity={contents.Quantity}
                                                        price={contents.Price}
                                                    ></All_Cart_Items>
                                                )
                                            }
                                            
                                        })

                                }

                            </div>
                        </div>

                        {/* Shopping Summary */}
                        <div className='pb-5'>
                            <Shopping_Summary />
                        </div>

                    </div>
                </section>

        </Fragment>
    )
}

export default Cart