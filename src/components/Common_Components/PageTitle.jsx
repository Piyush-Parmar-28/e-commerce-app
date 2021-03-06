import React from 'react'

const PageTitle = (props) => {
    return (
        <div className="block-heading pt-0 mb-2">
            <h2 className="text-info d-flex justify-content-center">{props.title}</h2>
            <p className= "d-flex justify-content-center">{props.desc}</p>
        </div>
    )
}

export default PageTitle