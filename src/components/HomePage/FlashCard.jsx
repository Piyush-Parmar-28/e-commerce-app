import React from 'react'

import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const FlashCard = (props) => {
    return (
        <div className={props.cardClass} style={{ width: "18rem", display: props.displayStatus }}>

            <img className="w-100" src={props.Imgsrc} alt={props.altText} />

            <div className="p-2">

                <div className='d-flex justify-content-between'>
                    <h5 className={"text-dark d-flex justify-content-center"}>{props.title}</h5>
                    <p className="card-text text-muted mb-0">$ 20</p>
                </div>


                <div className="d-flex justify-content-between">

                    <div className='mt-auto'>
                        <Rating name="read-only" value={4} size="small" readOnly />
                    </div>

                    <button type="button" className="btn btn-outline-danger btn-sm">
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Add To Cart"
                        >
                            <AddIcon />
                        </Tooltip>
                    </button>

                </div>

            </div>
        </div>

    )
}

export default FlashCard