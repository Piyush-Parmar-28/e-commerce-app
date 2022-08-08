import React, { useState } from 'react'

import { categoryData } from '../../Data'
import Category_Image from './Category_Image'
import PageTitle from "../Common_Components/PageTitle"

const Categories = () => {

    const [displayClass, setDisplayClass]= useState("col-4 col-lg-3 item position-relative p-0")
    const [noDisplayClass, setNoDisplayClass]= useState("d-none d-lg-block col-lg-3 item position-relative p-0")

    return (
        <section className="blue-bg pt-5 pb-5">

            <PageTitle
                title="Categories"
                desc="Explore various categories!!"
            ></PageTitle>

            <div className="row g-0">

                {
                    categoryData.map((contents) => {

                        return (
                            <Category_Image 
                                key= {contents.id}
                                display= {contents.id >6 ? noDisplayClass: displayClass }
                                id= {contents.id}
                                image= {contents.src}  
                                label= {contents.label}                          
                            />
                        )

                    })
                }

            </div>
        </section>
    )
}

export default Categories