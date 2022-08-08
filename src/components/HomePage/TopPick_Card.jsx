import React from 'react'

const TopPick_Card = (props) => {
    return (
        <div className= "col-sm-6 col-lg-3 px-2" style={{display: props.displayStatus }}>
            <div className="card mb-3">
                <div className="row">
                    
                    <div className="col-12">
                        <img src={props.imgSrc} className="img-fluid rounded w-100 h-100" alt="..." />
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default TopPick_Card