import * as types from "../constants/userActionTypes";

export const users = (state = [], action) => {
	switch (action.type) {
	case types.GET_USER:
		return [...state, action.user];
	case types.CLEAR_USERS:
		return [];
	default:
		return state;
	}
};

export const user = (state = "", action) => {
	switch (action.type) {
	case types.GET_CORELATED_USER:
		return action.user;
	default:
		return state;
	}
};