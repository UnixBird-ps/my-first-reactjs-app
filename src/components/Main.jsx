
import React, { Component } from "react";
//import CounterList from "./CounterList.jsx";
import CounterList from "./CounterList.jsx";


class Main extends Component
{
	state = {};

	// constructor( pProps )
	// {
	// 	super( pProps );
	// 	this.state = {};
	// }


	componentDidMount()
	{
	}


	componentWillUnmount()
	{
	}


	render ()
	{
		let lResult =
		(
			<>
				<CounterList />
			</>
		);

		return lResult;
	}
}


export default Main;
