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
    clickHandler = (event) => {
        event.preventDefault();
    }
    render() {
        const products = this.props.products;
        return (
            <div className="col-md-7">
                <table className="table table-hover .table-responsive{-sm|-md|-lg|-xl} mt-4">
                    <caption>List of Products</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return <Product
                                id={product.product_id}
                                name={product.name}
                                price={product.unit_price}
                                quantity={product.quantity}
                                clicked={this.clickHandler}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

