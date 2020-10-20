import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementtCounter} />
				<CounterControl label="Add 10" clicked={this.props.onAddCounter} />
				<CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>
					Store Result
				</button>
				<ul>
					{this.props.storedResults.map(storeResult => {
						return (
							<li
								key={storeResult.id}
								onClick={() => this.props.onDeleteResult(storeResult.id)}
							>
								{storeResult.value}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch(actionCreator.increment()),
		onDecrementtCounter: () => dispatch(actionCreator.decrament()),
		onAddCounter: () => dispatch(actionCreator.add(10)),
		onSubtractCounter: () => dispatch(actionCreator.add(15)),
		onStoreResult: result => dispatch(actionCreator.storeResult(result)),
		onDeleteResult: id => dispatch(actionCreator.deleteResult(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
