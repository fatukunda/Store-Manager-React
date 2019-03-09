import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Product from './Product';
import { fetchProducts } from '../../actionTypes/productActions';
import { fetchSingleProduct } from "../../actionTypes/singleProductActionTypes";

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id))
});
const mapStateToProps = state => ({
    products: state.productsReducer.products,
    isfetchProductsPending: state.productsReducer.isfetchProductsPending,
    errors: state.productsReducer.errors,
    product: state.singleProductReducer.product,

});

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts()
    }
    clickHandler = (productId) => {
        this.props.fetchSingleProduct(productId)
        window.location.href = `/products/${productId}`
    }
    render() {
        const products = this.props.products;
        return (
            <div className="col-md-7">
                {
                    this.props.isfetchProductsPending &&
                    <div className="d-flex align-items-center">
                        <strong text-info>Loading...</strong>
                        <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                }
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
                                clicked={() => this.clickHandler(product.product_id)}
                                key={product.id}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

