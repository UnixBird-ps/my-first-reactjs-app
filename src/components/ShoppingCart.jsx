
import React, { Component } from "react";
import Counter from "./Counter.jsx";


class ShoppingCart extends Component
{
	render ()
	{
		let lResult =
		(
			<div className="cartContainer">
				<div className="col-auto shopping-cart">
					<ul className="list-group list-group-flush">
						{
							this.props.counters.map
							(
								counter =>
								(
									<li className="list-group-item" key={ counter.id }>
										<Counter
											key={ counter.id }
											onRemove={ this.props.onRemove }
											onIncrement={ this.props.onIncrement }
											onDecrement={ this.props.onDecrement }
											counter={ counter }
										/>
									</li>
								)
							)
						}
					</ul>
					<div className="cartButtons">
						<button className="btn btn-sm btn-outline-dark cancelButton">Cancel Order</button>
						<button className="btn btn-sm btn-outline-dark orderButton">Checkout</button>
					</div>
				</div>
			</div>
		);

		return lResult;
	}


	// constructor( pProps )
	// {
	// 	super( pProps );
	// 	state =
	// 	{
	// 		value: 0
	// 	};
	// }


	// componentDidMount()
	// {
	// }


	// componentWillUnmount()
	// {
	// }

}


export default ShoppingCart;
