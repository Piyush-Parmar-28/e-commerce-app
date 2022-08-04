import React from "react";
import style from './card.module.css';
import Image from "../../../pages/Image";
import { Rating } from "@mui/material";

const Card=(props)=>{


    return (
        <div className={style.card}>
        <div className={style.image_outter}>
            <Image photoID={props.imageID}></Image>
        </div>
        <div className={style.detail_div}>
          <div className={style.name_div}>
            <a>{props.name}</a>
          </div>
          <div className={style.price_div}>
            <span className={style.ratings}>
            <Rating name="read-only" size="small" precision={0.5} value={props.ratings} readOnly />

            </span>
            <span className={style.price}> Rs. {props.price}</span>
          </div>
          <div className={style.buttons_div}>
            <button className={style.details}> Details</button>
            <button className={style.add}>Add</button>
          </div>
        </div>
      </div>
    );
}

export default  Card;