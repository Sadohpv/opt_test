import {
	FETCH_USER_ERROR,
	FETCH_USER_LOGIN,
	FETCH_USER_SUCCESS,
	USER_LOGIN,
	USER_LOGOUT,
	USER_REFRESH,
} from "../actions/userAction";

const INITIAL_STATE = {
	data_init: {
		email: "",
		auth: null,
		token: "",
	},
    isLoading: false,
    isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_USER_LOGIN:
			return {
                ...state,
                isLoading: true,
                isError: false,
            };
		case FETCH_USER_ERROR:
			return {
				...state,
				data_init: {
					auth: false,
				},
                isLoading: false,
                isError: true,
			};
		case FETCH_USER_SUCCESS:
			console.log(action);
			return {
				...state,
				data_init: {
					email: action.data.email,
					token: action.data.token,
					auth: true,
				},
                isLoading: false,
                isError: false,
			};

        case USER_LOGOUT:
                localStorage.removeItem('email');
                localStorage.removeItem('token');
            return {
                ...state,
                data_init: {
					email: '',
					token: '',
					auth: null,
				},
            }
		case USER_REFRESH:
			return {
                ...state,
                data_init: {
					email:  localStorage.getItem('email'),
					token: localStorage.getItem('token'),
					auth: true,
				},
            }
		default:
			return state;
	}
};

export default userReducer;
