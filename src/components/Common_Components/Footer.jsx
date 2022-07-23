import React from 'react'

const Footer = () => {

    var style1= {
        fontSize: "larger",
        fontFamily: "Times New Roman', Times, serif"
    }

    return (
        <div style={{position: "relative", bottom: 0, width: "100vw"}}>
            <div className="pb-3 pt-4 bg-dark">

                <p className="text-center text-white border-bottom mx-5 pb-3" style={style1}>This Website is a copyright property <i className="far fa-copyright"></i> of Piyush Parmar.</p>

                <p className="text-center text-white mb-0" style={style1}>All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer