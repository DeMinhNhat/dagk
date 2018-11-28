import * as types from "../constants/authActionTypes";

export const auth = (state = {}, action) => {
	switch (action.type) {
	case types.SIGNIN_SUCCESS:
		return {
			...state,
			...action.auth,
			isUserSignedIn: true
		};
	case types.SIGNOUT_SUCCESS:
		return {
			...state,
			...action.auth,
			isUserSignedIn: false
		};
	default:
		return state;
	}
};

export const stars = (state = [], action) => {
	switch (action.type) {
	case types.RETRIEVE_STAR:
		return [...state, action.star];
	default:
		return state;
	}
};
