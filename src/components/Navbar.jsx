
import React, { Component } from "react";


class Navbar extends Component
{
	//state = {};


	render ()
	{
		let lResult =
		(
			<div className="row navbar">
				<div className="row col-auto">
					<div className="col-auto">
						<h2 className="shop-name-h2">My First React JS App</h2>
					</div>
					<div className="col-auto">
						<span> v0.1.0</span>
					</div>
				</div>
				<div className="row col-auto">
					<div className="col-auto" >
						<button onClick={ this.props.onToggleShoppingCart } type="button" className="btn btn-sm btn-outline-white position-relative hidden" id="cart-icon">
							<span className="material-icons">shopping_cart</span>
							<span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-primary" id="cart-items">{ this.props.totalCartItems }</span>
						</button>
					</div>
					<div className="col-auto nav-container">
					</div>
				</div>
			</div>
		);

		return lResult;
	}

}


export default Navbar;
