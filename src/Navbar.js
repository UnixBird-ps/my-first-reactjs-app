
import React from 'react';


class Navbar extends React.Component
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
			<div className="row navbar">
				<div className="row col-auto">
					<div className="col-auto">
						<h2 className="shop-name-h2">My First React JS App</h2>
					</div>
					<div className="col-auto">
						<span> v0.1.0</span>
					</div>
				</div>
				<div class="row col-auto">
					<div class="col-auto" >
					</div>
					<div class="col-auto nav-container">
					</div>
				</div>
			</div>
		);

		return lResult;
	}
}


export default Navbar;
