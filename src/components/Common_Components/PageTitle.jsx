import React from 'react'


const PageTitle = (props) => {
    return (
        <div className="block-heading pt-0 mb-2" id='page_title'>
    
            <h2 className="d-flex justify-content-center" >{props.title}</h2>
            <p className= "d-flex justify-content-center">{props.desc}</p>
        </div>
    )
}

export default PageTitle;