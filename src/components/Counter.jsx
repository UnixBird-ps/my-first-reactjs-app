
import React, { Component } from "react";


class Counter extends Component
{
	// state =
	// {
	// 	title: this.props.counter.title,
	// 	max: this.props.counter.max,
	// 	value: this.props.counter.value
	// };


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
				<div className="row row-cols-4">
					<div className="col">
						<span>{ this.props.counter.title }</span>
					</div>
					<div className="col">
						<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
					</div>
					<div className="col">
						<button onClick={ () => this.props.onIncrement( this.props.counter ) } type="button" className="btn btn-outline-primary btn-sm">+</button>
						<button onClick={ () => this.props.onDecrement( this.props.counter ) } type="button" className="btn btn-outline-primary btn-sm">-</button>
					</div>
					<div className="col">
						<button onClick={ () => this.props.onRemove( this.props.counter.id ) } type="button" className="btn btn-outline-danger btn-sm">Remove</button>
					</div>
				</div>
		);

		return lResult;
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


	// componentDidMount()
	// {
	// }


	// componentWillUnmount()
	// {
	// }

}


export default Counter;
