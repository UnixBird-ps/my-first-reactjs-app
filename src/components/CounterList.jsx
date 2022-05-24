import React, { Component } from "react";
import Counter from "./Counter.jsx";


class CounterList extends Component
{

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
				{
					this.props.counters.map
					(
						counter =>
						(
							<li className="list-group-item" key={ counter.id }>
								<Counter
									onRemove={ this.props.onRemove }
									onIncrement={ this.props.onIncrement }
									onDecrement={ this.props.onDecrement }
									key={ counter.id }
									counter={ counter }
								/>
							</li>
						)
					)
				}
			</ul>
		);

		return lResult;
	}


	// componentDidMount()
	// {
	// }


	// componentWillUnmount()
	// {
	// }

}


export default CounterList;
