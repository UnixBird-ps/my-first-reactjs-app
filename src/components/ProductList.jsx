
import React, { Component } from "react";
import Product from "./Product.jsx";

class ProductList extends Component
{
	render()
	{
		let lResult =
		(
			<>
				<ul className='list-group list-group-flush' id='products'>
						{
							this.props.products.map
							(
								product =>
								(
									<Product
										key={ product.id }
										inList={ true }
										onAddToCart={ this.props.onAddToCart }
										product={ product }
									/>
								)
							)
						}
				</ul>
			</>
		);

		return lResult;
	}
}

export default ProductList;
