import React from 'react';
import './Text.css';

const Text = ({ title, img, description}) => {
    return (    
        <div className="Text">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Text;