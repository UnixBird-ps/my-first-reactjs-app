
import React from "react";
import Navbar from "./Navbar.js";
import Menu from "./Menu.js";
import Main from "./Main.js";


class App extends React.Component
{
	constructor( pProps )
	{
		super( pProps );
		this.state = {};
	}


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
				<div class="container">
					<Menu />
					<Main />
				</div>
			</>
		);

		return lResult;
	}
}


export default App;
