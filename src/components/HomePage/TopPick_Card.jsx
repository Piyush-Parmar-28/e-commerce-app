import React from 'react'

const TopPick_Card = (props) => {
    return (
        <div className= "col-3 px-2" style={{display: props.displayStatus }}>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-8">
                        <img src={props.imgSrc} className="img-fluid rounded-start w-100 h-100" alt="..." />
                    </div>

                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">{props.myItem}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopPick_Card