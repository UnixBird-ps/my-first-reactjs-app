
import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Menu from "./Menu.jsx";
import CounterList from "./CounterList.jsx";
//import Main from "./Main.jsx";


class App extends Component
{
	state =
	{
		counters:
		[
			{ id: 1, title:    "Apples", min: 0, max: 20, value: 0 },
			{ id: 2, title:   "Oranges", min: 0, max: 20, value: 0 },
			{ id: 3, title: "Cucumbers", min: 0, max: 20, value: 0 },
			{ id: 4, title:   "Bananas", min: 0, max: 20, value: 0 }
		]
	};

	// constructor( pProps )
	// {
	// 	super( pProps );
	// 	this.state = {};
	// }


	// componentDidMount()
	// {
	// }


	// componentWillUnmount()
	// {
	// }


	handleIncrement = ( pCounter ) =>
	{
		if ( pCounter.value >= pCounter.max ) return;

		const lCounters = [ ...this.state.counters ];
		const lIndex = lCounters.indexOf( pCounter );
		lCounters[ lIndex ] = { ...pCounter };

		lCounters[ lIndex ].value++;
		this.setState( { counters: lCounters } );
	}


	handleDecrement = ( pCounter ) =>
	{
		if ( pCounter.value <= pCounter.min ) return;

		const lCounters = [ ...this.state.counters ];
		const lIndex = lCounters.indexOf( pCounter );
		lCounters[ lIndex ] = { ...pCounter };
		lCounters[ lIndex ].value--;
		this.setState( { counters: lCounters } );
	}


	handleRemove = ( pCounterId ) =>
	{
		const lNewCounters = this.state.counters.filter( c => c.id !== pCounterId );
		this.setState( { counters : lNewCounters } );
	}


	render ()
	{
	
		let lResult =
		(
			<>
				<Navbar totalCounters={ this.state.counters.filter( c => c.value > 0 ).length } />
				<div className="container">
					<Menu />
					<main className="container">
						<CounterList
							counters={ this.state.counters }
							onRemove={ this.handleRemove }
							onIncrement={ this.handleIncrement }
							onDecrement={ this.handleDecrement }
						/>
					</main>
				</div>
			</>
		);

		return lResult;
	}
}


export default App;
