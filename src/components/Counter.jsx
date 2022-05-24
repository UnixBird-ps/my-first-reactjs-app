import React, { Component } from "react";


class Counter extends Component
{
	state =
	{
		title: this.props.counter.title,
		max: this.props.counter.max,
		value: this.props.counter.value
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
		let lResult =
		(
			<>
				<div className="row row-cols-4">
					<div className="col">
						<h3>{ this.props.counter.title }</h3>
					</div>
					<div className="col">
						<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
					</div>
					<div className="col">
						<button onClick={ () => this.props.onIncrement( this.props.counter ) } type="button" className="btn btn-outline-primary btn-sm">+</button>
						<button onClick={ () => this.props.onDecrement( this.props.counter ) } type="button" className="btn btn-outline-primary btn-sm">-</button>
					</div>
					<div className="col">
						<button onClick={ () => this.props.onRemove( this.props.counter.id ) } className="btn btn-outline-danger btn-sm">Remove</button>
					</div>
				</div>
			</>
		);

		return lResult;
	}


	handleIncrement = () =>
	{
		if ( this.props.counter.value < this.props.counter.max ) this.setState( { value: this.props.counter.value + 1 } );
	}


	handleDecrement = () =>
	{
		if ( this.props.counter.value > 1 ) this.setState( { value: this.props.counter.value - 1 } );
	}


	formatCount()
	{
		const lValue = this.props.counter.value;
		return lValue === 0 ? "Zero" : lValue;
	}


	getBadgeClasses()
	{
		let lClasses = "badge rounded-pill m-2 bg-";
		lClasses += this.props.counter.value === 0 ? "warning" : "primary";
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
