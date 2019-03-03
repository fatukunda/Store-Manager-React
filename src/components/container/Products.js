import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Product from './Product';
import { fetchProducts } from '../../actionTypes/productActions';

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts())
});
const mapStateToProps = state => ({
    products: state.productsReducer.products,
    isfetchProductsPending: state.productsReducer.isfetchProductsPending,
    errors: state.productsReducer.errors
});

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }
    render() {
        const products = this.props.products;
        return (
            <div className="col-md-8">
                <div className="row">
                    {products.map((product) => {
                        return <Product name={product.name} price={product.unit_price} />
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

