import React from 'react';

import './RecentItems.css';

const RecentItems = ({ url, title}) => {
    return (
        <div className="item">
            <iframe 
            width="400"
            height="235"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

            <div className="item__details">
                <img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.96.480722.JPG" alt="" />
                <div className="item__detailsText">
                    <h6>{title}</h6>
                    <p>cleverprogrammer</p>
                    <p>Science & Technology</p>
                </div>
            </div>
        </div>
    )
}

export default RecentItems
