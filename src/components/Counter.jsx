import React, { Component } from "react";


class Counter extends Component
{
	state =
	{
		value: this.props.value
	};


	// constructor( pProps )
	// {
	// 	super( pProps );
	// 	this.handleIncrement = this.handleIncrement.bind( this );
	// 	this.handleDecrement = this.handleDecrement.bind( this );
	// 	state =
	// 	{
	// 		value: 0
	// 	};
	// }


	render ()
	{
		console.log( "props", this.props );

		let lResult =
		(
			<>
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
				<button onClick={ () => this.handleIncrement( { id: 1 } ) } type="button" className="btn btn-outline-primary btn-sm">Increment</button>
				<button onClick={ () => this.handleDecrement( { id: 1 } ) } type="button" className="btn btn-outline-primary btn-sm">Decrement</button>
			</>
		);

		return lResult;
	}


	handleIncrement = () =>
	{
		this.setState( { value: this.state.value + 1 } );
	}


	handleDecrement = () =>
	{
		if ( this.state.value > 0 ) this.setState( { value: this.state.value - 1 } );
	}


	formatCount()
	{
		const lValue = this.state.value;
		return lValue === 0 ? "Zero" : lValue;
	}


	getBadgeClasses()
	{
		let lClasses = "badge rounded-pill m-2 bg-";
		lClasses += this.state.value === 0 ? "warning" : "primary";
		return lClasses;
	}


	componentDidMount()
	{
	}


	componentWillUnmount()
	{
	}

}


export default Counter;
