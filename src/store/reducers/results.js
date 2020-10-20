import * as actionType from "../actions/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
	results: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.STORE_RESULT:
			return updatedObject(state, {
				results: state.results.concat({ id: new Date(), value: action.result }),
			});
		case actionType.DELETE_RESULT:
			const updatedArray = state.results.filter(result => result.id !== action.resultID);
			return updatedObject(state, { results: updatedArray });
	}
	return state;
};

export default reducer;
