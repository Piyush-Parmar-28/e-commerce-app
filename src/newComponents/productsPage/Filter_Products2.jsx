import React from 'react'
import style from './filterProduct.module.css'


const Filter_Products = (props) => {
    return (

            <div className={style.warp_div}>

                    <h4 className={style.heading}>Categories</h4>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-secondary" onClick={props.onAll}>All</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light"  onClick={props.onElectronics}>Electronics</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light"  onClick={props.onFashion}>Fashion</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light"  onClick={props.onFurniture}>Furniture</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light"  onClick={props.onKitchen}>Kitchen</button>
                    </div>

                    <div style={{margin:'10px'}}>
                    <button type="button" class="btn btn-light"  onClick={props.onHomeDecor}>HomeDecor</button>
                    </div>

                </div>

    )
}

export default Filter_Products