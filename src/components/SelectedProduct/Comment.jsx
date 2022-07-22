import React from 'react'
import Star_Rating from '../Common_Components/Star_Rating';

const Comment = () => {
    return (
        <div className="reviews box mt-4">
            <div className="p-4 review-item">
                <Star_Rating></Star_Rating>

                <h4>Incredible product</h4>

                <span className="text-muted">
                    <a href="#">John Smith</a>, 20 Jan 2018
                </span>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    )
}

export default Comment