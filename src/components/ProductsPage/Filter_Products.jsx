import React from 'react'

const Filter_Products = (props) => {
    return (
        <div className="col-4 col-md-3">

            <div className="p-5">

                {/* 1. Categories */}
                <div className="mb-5">
                    <h4>Categories</h4>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-secondary" style={{width:'120px'}} onClick={props.onAll}>All</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light" style={{width:'120px'}} onClick={props.onElectronics}>Electronics</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light" style={{width:'120px'}} onClick={props.onFashion}>Fashion</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light" style={{width:'120px'}} onClick={props.onFurniture}>Furniture</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light" style={{width:'120px'}} onClick={props.onKitchen}>Kitchen</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light" style={{width:'120px'}} onClick={props.onHomeDecor}>HomeDecor</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Filter_Products