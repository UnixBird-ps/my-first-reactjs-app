import React, { Component } from "react";
import Counter from "./Counter.jsx";


class CounterList extends Component
{
	state =
	{
		counters:
		[
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	// constructor( pProps )
	// {
	// 	super( pProps );
	// 	state =
	// 	{
	// 		value: 0
	// 	};
	// }


	render ()
	{
		let lResult =
		(
			<ul className="list-group list-group-flush">
				{ this.state.counters.map( counter => <li className="list-group-item" key={ counter.id }><Counter key={ counter.id } value={ counter.value } /></li> ) }
			</ul>
		);

		return lResult;
	}


	componentDidMount()
	{
	}


	componentWillUnmount()
	{
	}

}


export default CounterList;
