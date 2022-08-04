import React from "react";
import style from './card.module.css';
import Image from "../../../pages/Image";

import AddIcon from '@mui/icons-material/Add';
import { Rating } from "@mui/material";

const Card = (props) => {

    return (
        <div className={style.card}>
            <div className={style.image}>
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

                <div className="d-flex justify-content-between mt-1">
                    <button className="btn-normal"> Details</button>
                    <button type="submit" className="btn-icon btn-bg-green btn-small">
                        <AddIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;