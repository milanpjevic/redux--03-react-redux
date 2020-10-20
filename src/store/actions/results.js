import * as actionType from "./actionsTypes";

export const saveResult = res => {
	return {
		type: actionType.STORE_RESULT,
		result: res,
	};
};

export const storeResult = res => {
	return dispatch => {
		setTimeout(() => {
			dispatch(saveResult(res));
		}, 2000);
	};
};

export const deleteResult = id => {
	return {
		type: actionType.DELETE_RESULT,
		resultID: id,
	};
};
