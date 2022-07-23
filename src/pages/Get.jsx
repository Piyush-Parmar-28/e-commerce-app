import React, { Fragment, useEffect, useState } from "react";
import Image from './Image'

const Get = () => {

    const [productData, updateProductData] = useState([])


    useEffect(() => {
        fetch('/get').then(data => data.json()).then(d => updateProductData(d))
    }, [])


    const render = productData.map((data) =>

        <div>
            <p>{data.Product}</p>
            <p>{data.Desc}</p>

            <Image 
                photo={data.ImageID}
            ></Image>

            {console.log(data.ImageID)}

        </div>
    )

    return (
        <Fragment>
            {render}
        </Fragment>
    );
}

export default Get;