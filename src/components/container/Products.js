import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from './Product';
import { fetchProducts } from '../../actionTypes/productActions';
import { fetchSingleProduct } from '../../actionTypes/singleProductActionTypes';
import SingleProductView from './SingleProductView';

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: () => dispatch(fetchProducts()),
	fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id))
});
const mapStateToProps = (state) => ({
	products: state.productsReducer.products,
	isfetchProductsPending: state.productsReducer.isfetchProductsPending,
	errors: state.productsReducer.errors,
	product: state.singleProductReducer.product
});

export class Products extends Component {
	state = {
		isFetchSingleProduct: false,
		productId: null
	};
	componentDidMount() {
		this.props.fetchProducts();
	}
	backHandler = () => {
		this.setState({
			...this.state,
			isFetchSingleProduct: false
		});
	};
	clickHandler = (productId) => {
		this.props.fetchSingleProduct(productId);
		this.setState({
			...this.state,
			isFetchSingleProduct: !this.state.isFetchSingleProduct,
			productId
		});
	};
	render() {
		const products = this.props.products;
		const { isFetchSingleProduct, productId } = this.state;
		return (
			<div className="col-md-7">
				{isFetchSingleProduct ? (
					<SingleProductView id={productId} backHandler={this.backHandler} />
				) : (
					<div>
						{this.props.isfetchProductsPending && (
							<div className="d-flex align-items-center">
								<strong className="text-info">Loading...</strong>
								<div className="spinner-border ml-auto" role="status" aria-hidden="true" />
							</div>
						)}
						<table className="table table-hover .table-responsive{-sm|-md|-lg|-xl} mt-4">
							<caption>List of Products</caption>
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Product</th>
									<th scope="col">Quantity</th>
									<th scope="col">Unit price</th>
									<th />
								</tr>
							</thead>
							<tbody>
								{products.map((product) => {
									return (
										<Product
											id={product.product_id}
											name={product.name}
											price={product.unit_price}
											quantity={product.quantity}
											clicked={this.clickHandler.bind(this, product.product_id)}
											key={product.product_id}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
		);
	}
}
Products.propTypes = {
	fetchProducts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
