import React from 'react'

const PageTitle = (props) => {
    return (
        <div className="block-heading pt-0 mb-2" >
    
            <h2 className="d-flex justify-content-center" style={{color:'#e1775d',fontFamily:'play',fontSize:'2.5rem'}}>{props.title}</h2>
            <p className= "d-flex justify-content-center">{props.desc}</p>
        </div>
    )
}

export default PageTitle;