import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductView from '../presentational/ProductView';
import { fetchSingleProduct } from '../../actionTypes/singleProductActionTypes';

const mapDispatchToProps = (dispatch) => ({
	fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id))
});

const mapStateToProps = (state) => ({
	product: state.singleProductReducer.product,
	isfetchSingleProductPending: state.singleProductReducer.isfetchSingleProductPending,
	error: state.singleProductReducer.error
});
export class SingleProductView extends Component {
	componentDidMount() {
		const { id } = this.props;
		this.props.fetchSingleProduct(id);
	}

	render() {
		const { product } = this.props;
		return (
			<div>
				<ProductView name={product.name} price={product.unit_price} quantity={product.quantity} />
				<button className="btn btn-info" onClick={this.props.backHandler}>
					{' '}
					Back{' '}
				</button>
			</div>
		);
	}
}
SingleProductView.propTypes = {
	fetchSingleProduct: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductView);
