import React from 'react'

import Image from '../../pages/Image';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';

const FlashCard = (props) => {
    return (
        <div className={props.cardClass} style={{ width: "18rem", display: props.displayStatus }}>

            <Image photoID={props.ImageID} size='10rem'></Image>

            <div className="p-2">

                <div className='d-flex justify-content-between'>
                    <h5 className={"text-dark d-flex justify-content-center"}>{props.title}</h5>
                    <p className="card-text text-muted mb-0">$ {props.Price}</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className='mt-auto'>
                        <Rating name="read-only" precision={0.5} value={props.Ratings} size="small" readOnly />
                    </div>

                    <button type="button" className="btn-icon btn-bg-red btn-xsmall">
                        <AddIcon />
                    </button>
                </div>

            </div>
        </div>

    )
}

export default FlashCard