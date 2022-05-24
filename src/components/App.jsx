
import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Menu from "./Menu.jsx";
import ProductList from "./ProductList.jsx";
import ShoppingCart from "./ShoppingCart.jsx";


class App extends Component
{
	state =
	{
		shoppingCart:
		{
			hidden: true,
			counters:
			[
			]
		},
		availableProducts:
		[
			{ id: 1, title:    "Apples", min: 1, max: 20, price: 24.9, quantityIncrement: 1, imgUrl: "" },
			{ id: 2, title:   "Oranges", min: 1, max: 10, price: 26.9, quantityIncrement: 1, imgUrl: "" },
			{ id: 3, title: "Cucumbers", min: 1, max: 10, price: 20.9, quantityIncrement: 1, imgUrl: "" },
			{ id: 4, title:   "Bananas", min: 1, max: 15, price: 19.9, quantityIncrement: 1, imgUrl: "" },
			{ id: 5, title:  "Potatoes", min: 1, max: 30, price:  8.9, quantityIncrement: 1, imgUrl: "" },
			{ id: 6, title:  "Tomatoes", min: 1, max: 15, price: 15.9, quantityIncrement: 1, imgUrl: "" }
		]
	};


	render ()
	{
		let lResult =
		(
			<>
				<Navbar
					onToggleShoppingCart={ this.toggleShoppingCart }
					totalCartItems={ this.countCartItems() }
				/>
				<div className="container">
					<Menu />
					<main className="container">
						<ProductList
							products={ this.state.availableProducts }
							onAddToCart={ this.handleAddToCart }
						/>
						{
							!this.state.shoppingCart.hidden &&
							(
								<ShoppingCart
									counters={ this.state.shoppingCart.counters }
									onRemove={ this.handleRemove }
									onIncrement={ this.handleIncrement }
									onDecrement={ this.handleDecrement }
								/>
							)
						}
					</main>
				</div>
			</>
		);

		return lResult;
	}


	handleAddToCart = ( pOrderRow, pOptions = { changeState : true } ) =>
	{
		let lNewState = this.state;
		let lFoundIndexOfAvailableProduct = lNewState.availableProducts.findIndex( p => p.id === pOrderRow.productId );
		if ( lFoundIndexOfAvailableProduct < 0 ) return;

		let lProduct = lNewState.availableProducts[ lFoundIndexOfAvailableProduct ];
		const lNewShoppingCart = lNewState.shoppingCart;
		let lFoundIndexOfProductInCart = lNewShoppingCart.counters.findIndex( c => c.productId === lProduct.id );
		if ( lFoundIndexOfProductInCart < 0 )
		{
			if ( pOrderRow.quantity > lProduct.max )
			{
				alert(
					`
						${ pOrderRow.quantity } > ${ lProduct.max }
						That quantity would exceed max allowed. Please decrease and try again.
					`
				);
				return;
			}

			lNewShoppingCart.counters.push
			(
				{
					id: lNewShoppingCart.counters.length,
					title: lProduct.title,
					productId: lProduct.id,
					value: pOrderRow.quantity,
					priceAdded: lProduct.price,
					product: lProduct
				}
			);
		}
		else
		{
			let lNewValue = lNewShoppingCart.counters[ lFoundIndexOfProductInCart ].value + pOrderRow.quantity;
			if ( lNewValue > lProduct.max )
			{
				alert(
					`
						${ lNewValue } > ${ lProduct.max }
						That quantity would exceed max allowed. Please decrease and try again.
					`
				);
				return;
			}

			lNewShoppingCart.counters[ lFoundIndexOfProductInCart ].value = lNewValue;
		}

		pOptions.changeState && this.setState( lNewState );
	}


	toggleShoppingCart = () =>
	{
		let lNewState = this.state;
		lNewState.shoppingCart.hidden = !this.state.shoppingCart.hidden;
		this.setState( lNewState );
	}


	countCartItems()
	{
		let lItemsInCart = 0;
		for ( let c of this.state.shoppingCart.counters )
		{
			lItemsInCart += c.value;
		}
		return lItemsInCart;
	}


	limitValues( pOptions = { changeState : true } )
	{
		let lNewState = this.state;
		const lCounters = [ ...lNewState.shoppingCart.counters ];
		for ( let c of lCounters )
		{
			if ( c.value > c.max ) c.value = c.max;
			if ( c.value < c.min ) c.value = c.min;
		}
		lNewState.shoppingCart.counters = lCounters;
		pOptions.changeState &&  this.setState( lNewState );
	}


	handleIncrement = ( pCounter ) =>
	{
		if ( pCounter.value >= pCounter.product.max ) return;

		let lNewState = this.state;
		const lCounters = [ ...lNewState.shoppingCart.counters ];

		const lIndex = lCounters.indexOf( pCounter );
		lCounters[ lIndex ] = { ...pCounter };
		lCounters[ lIndex ].value += pCounter.product.quantityIncrement;

		lNewState.shoppingCart.counters = lCounters;
		this.setState( lNewState );
	}


	handleDecrement = ( pCounter ) =>
	{
		if ( pCounter.value <= pCounter.product.min ) return;

		let lNewState = this.state;
		const lCounters = [ ...lNewState.shoppingCart.counters ];

		const lIndex = lCounters.indexOf( pCounter );
		lCounters[ lIndex ] = { ...pCounter };
		lCounters[ lIndex ].value -= pCounter.product.quantityIncrement;
		lNewState.shoppingCart.counters = lCounters;
		this.setState( lNewState );
	}


	handleRemove = ( pCounterId ) =>
	{
		let lNewState = this.state;
		const lNewCounters = lNewState.shoppingCart.counters.filter( c => c.id !== pCounterId );
		lNewState.shoppingCart.counters = lNewCounters;
		this.setState( lNewState );
	}


	componentDidMount()
	{
		this.limitValues();
	}


	// componentWillUnmount()
	// {
	// }


	constructor( pProps )
	{
		super( pProps );

		this.limitValues( { changeState : false } );

		//this.handleAddToCart( { productId: 1, quantity : 2 }, { changeState : false } );
	}

}


export default App;
