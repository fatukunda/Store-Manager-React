import React from 'react';

const Product = ({ name, category, price, quantity }) => {
    return (
        <div className="card col-md-4 mt-2">
            <img className="card-img-top" src="https://via.placeholder.com/150" alt="ProductImage" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-info">Read More</a>
            </div>
        </div>
    )
}
export default Product;