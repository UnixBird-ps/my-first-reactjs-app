
import React, { Component } from "react";


class Product extends Component
{
	state =
	{
		buyQuantity: 1
	};


	render()
	{
		let lResult =
		(
			<>
				{
					this.props.inList &&
					(
						<li className="list-group-item">
							<div className="productInList" id={ this.props.product.id }>
								<div className="image">
									<img src={ this.props.product.imgUrl } alt="" />
								</div>
								<div className="product-info">
									<h3>{ this.props.product.title }</h3>
									<p className="price">Price: { this.props.product.price } kr</p>
									<input className="quantity" type="number" value={ this.state.buyQuantity } onChange={ this.handleBuyQuantityChange } min="1" max="100" />
									<button
										className="btn btn-light btn-sm buyButton"
										type="button"
										onClick={ () => this.props.onAddToCart( { productId: this.props.product.id, quantity : this.state.buyQuantity } ) }
									>
										Add to <span className="material-icons">shopping_cart</span>
									</button>
								</div>
							</div>
						</li>
					)
				}
			</>
		);
		return lResult;
	}


	handleBuyQuantityChange = ( e ) =>
	{
		let lNewState = this.state;
		lNewState.buyQuantity = +e.target.value;
		this.setState( lNewState );
	}

}



export default Product;
