import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Common_Components/Navbar'
import PageTitle from '../components/Common_Components/PageTitle';
import Cart_Item from '../components/Cart/Cart_Item';
import Shopping_Summary from '../components/Cart/Shopping_Summary';

const Cart = () => {

    var [IDs, setIDs] = useState([])
    useEffect( () => {

        fetch("/cart").then(data => data.json()).then(myData => {
            console.log(myData)
            setIDs(myData)
        })
    }, [])

    

    return (
        <Fragment>
            <Navbar></Navbar>

            <main>
                <section className="clean-block clean-cart dark-bg">
                    <div className="container">

                        <PageTitle
                            title="Shopping Cart"
                            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo."
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
                                                    <Cart_Item
                                                        key= {contents._id}
                                                        itemID= {contents.productID}
                                                        quantity={contents.Quantity}
                                                        price={contents.Price}
                                                    ></Cart_Item>
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
            </main>

        </Fragment>
    )
}

export default Cart