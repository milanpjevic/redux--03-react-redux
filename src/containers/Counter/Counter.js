import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../../store/actions";

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
				<button onClick={this.props.onStoreResult}>Store Result</button>
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
		ctr: state.counter,
		storedResults: state.results,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({ type: actionType.INCREMENT }),
		onDecrementtCounter: () => dispatch({ type: actionType.DECRAMENT }),
		onAddCounter: () => dispatch({ type: actionType.ADD, value: 10 }),
		onSubtractCounter: () => dispatch({ type: actionType.SUBTRACT, value: 15 }),
		onStoreResult: () => dispatch({ type: actionType.STORE_RESULT }),
		onDeleteResult: id => dispatch({ type: actionType.DELETE_RESULT, resultID: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
