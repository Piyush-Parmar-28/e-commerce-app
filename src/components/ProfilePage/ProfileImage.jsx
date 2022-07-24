import React from 'react'

const ProfileImage = (props) => {
    return (
        <div className="d-flex justify-content-center pb-4">
            <img src={props.imgSrc} className="rounded-circle" style={{ height: "220px", width: "220px", }} />
        </div>
    )
}

export default ProfileImage