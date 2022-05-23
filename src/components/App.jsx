
import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import Menu from "./Menu.jsx";
import Main from "./Main.jsx";


class App extends Component
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
				<Navbar />
				<div className="container">
					<Menu />
					<Main />
				</div>
			</>
		);

		return lResult;
	}
}


export default App;
