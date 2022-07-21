import React from 'react'

const Filter_Products = () => {
    return (
        <div className="col-4 col-md-3">

            <div className="p-5">

                {/* 1. Categories */}
                <div className="mb-5">
                    <h4>Categories</h4>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-1" />
                        <label className="form-check-label ms-2">Phones</label>
                    </div>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-2" />
                        <label className="form-check-label ms-2">Laptops</label>
                    </div>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-3" />
                        <label className="form-check-label ms-2">PC</label>
                    </div>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-4" />
                        <label className="form-check-label ms-2">Tablets</label>
                    </div>

                </div>

                {/* 2. Brands */}
                <div>
                    <h4>Brands</h4>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-5" />
                        <label className="form-check-label ms-2">Samsung</label>
                    </div>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-6" />
                        <label className="form-check-label ms-2">Apple</label>
                    </div>

                    <div>
                        <input className="form-check-input" type="checkbox" id="formCheck-7" />
                        <label className="form-check-label ms-2">HTC</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Filter_Products