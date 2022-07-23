import React , {Fragment} from 'react'
import Navbar from '../components/Common_Components/Navbar'
import PageTitle from '../components/Common_Components/PageTitle';
import Cart_Item from '../components/Cart/Cart_Item';
import Shopping_Summary from '../components/Cart/Shopping_Summary';

const Cart = () => {
    return (

        // Fragment just wraps our code.
        //  It is used to prevent unnecessary divs.

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
                                <Cart_Item></Cart_Item>
                                <Cart_Item></Cart_Item>
                                <Cart_Item></Cart_Item>
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