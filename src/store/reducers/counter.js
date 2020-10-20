import * as actionType from "../actions/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
	counter: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.INCREMENT:
			return updatedObject(state, { counter: state.counter + 1 });
		case actionType.DECRAMENT:
			return updatedObject(state, { counter: state.counter - 1 });
		case actionType.ADD:
			return updatedObject({ counter: state.counter + action.value });
		case actionType.SUBTRACT:
			return updatedObject(state, { counter: state.counter - action.value });
	}
	return state;
};

export default reducer;
