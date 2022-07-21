import React from 'react'

const SortProducts = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex flex-row justify-content-between" >


                <div className= "d-flex">
                    <a className="navbar-brand">Filter:</a>

                    <select className="form-select me-2" aria-label="Default select example">
                        <option defaultValue={"noColor"}>Color</option>
                        <option value={1}>Red</option>
                        <option value={2}>Blue</option>
                        <option value={3}>Green</option>
                        <option value={4}>Yellow</option>
                    </select>

                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue={"noSize"}>Size</option>
                        <option value={1}>XS</option>
                        <option value={2}>S</option>
                        <option value={3}>M</option>
                        <option value={4}>L</option>
                        <option value={5}>XL</option>
                    </select>

                </div>

                <div className= "d-flex">
                    <a className="navbar-brand">Sort:</a>

                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue={"noPrice"}>Price</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>

                </div>

            </div>
        </nav>
    )
}

export default SortProducts