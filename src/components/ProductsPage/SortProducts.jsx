import React from 'react'

const SortProducts = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex flex-row justify-content-between" >


                <div className= "d-flex">

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