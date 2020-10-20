import * as actionType from "./actionsTypes";

export const increment = () => {
	return {
		type: actionType.INCREMENT,
	};
};

export const decrament = () => {
	return {
		type: actionType.DECRAMENT,
	};
};

export const add = val => {
	return {
		type: actionType.ADD,
		value: val,
	};
};

export const subtract = val => {
	return {
		type: actionType.SUBTRACT,
		value: val,
	};
};
