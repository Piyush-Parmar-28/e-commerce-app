import React from 'react'
import style from './filterProduct.module.css'


const Filter_Products = (props) => {
    return (

        <div className={style.warp_div}>

            <h3 className="heading text-center pt-5">Categories</h3>

            <div style={{ margin: '10px' }}>
                <button type="button" class="btn-normal btn-bg-grey" onClick={props.onAll}>All</button>
            </div>

            <div style={{ margin: '10px' }}>
                <button type="button" class="btn-normal btn-bg-blue" onClick={props.onElectronics}>Electronics</button>
            </div>

            <div style={{ margin: '10px' }}>
                <button type="button" class="btn-normal btn-bg-blue" onClick={props.onFashion}>Fashion</button>
            </div>

            <div style={{ margin: '10px' }}>
                <button type="button" class="btn-normal btn-bg-blue" onClick={props.onFurniture}>Furniture</button>
            </div>

            <div style={{ margin: '10px' }}>
                <button type="button" class="btn-normal btn-bg-blue" onClick={props.onKitchen}>Kitchen</button>
            </div>

            <div style={{ margin: '10px' }}>
                <button type="button" class="btn-normal btn-bg-blue" onClick={props.onHomeDecor}>HomeDecor</button>
            </div>

        </div>

    )
}

export default Filter_Products