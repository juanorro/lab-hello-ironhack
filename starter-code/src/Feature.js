import React from 'react';
import './Feature.css';

const Feature = ({ title, img, description}) => {
    return (    
        <div className="Feature">
            <img src={img} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Feature;
