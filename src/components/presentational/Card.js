import React from 'react';

const Card = ({ header, body, id, icon }) => {
    return (
        <div className="card border-info mb-3 mt-3" id={id}>
            <div className="card-header text-center">{header}</div>
            <div className="card-body text-info text-center">
                <i className={icon}></i>
                <p className="card-title">{body}</p>
            </div>
        </div>
    )
}
export default Card;