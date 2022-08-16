import React from 'react'

const Filter_Products = (props) => {
    return (
        <div className="col-4 col-md-3">

            <div className="p-3" style={{boxShadow: "0.1rem 0rem 0.4rem rgba(162,173,170,0.5)"}}>

                {/* 1. Categories */}
                <h3 className='text-center heading'>Categories</h3>

                <div className='d-flex flex-column justify-content-center'>
                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onAll}>All</button>
                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onElectronics}>Electronics</button>
                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onFashion}>Fashion</button>
                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onFurniture}>Furniture</button>
                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onKitchen}>Kitchen</button>
                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onSports}>Sports</button>
                    </div>

                    <div className='mt-2 d-flex justify-content-center'>
                        <button type="button" class="btn-normal" style={{ width: '120px' }} onClick={props.onStudy}>Study</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter_Products