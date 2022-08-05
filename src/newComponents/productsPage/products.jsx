import React, { Fragment, useState, useEffect } from "react";
import style from "./products.module.css";
import Card from "./card/card";


const Productss = () => {

   const [products, setProducts] = useState([])
   if(window.location.search == '') window.location.href ='/';
   
   useEffect(() => {
       fetch(`SearchProducts${window.location.search.toLowerCase()}`).then(data => data.json()).then(myData => {
           setProducts(myData)
       })
   }, [])

   const render = products.map((data)=>
      <Card key={data._id} name={data.Product} productID={data._id} ratings={data.Ratings} price={data.Price} imageID={data.ImageID}></Card>
   )


  return (
    <Fragment>
      <div className={style.outter_div}>
        <div className={style.left_div}></div>
        <div className={style.right_div}>
          <div className={style.right_inner_div}>

            {render}
            {render}
       
   
          </div>
        </div>
      </div>
    </Fragment>
  );

};

export default Productss;
