import {
	FETCH_USER_ERROR,
	FETCH_USER_LOGIN,
	FETCH_USER_SUCCESS,
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
			return {
				...state,
				data_init: {
					email: action.data.email,
					auth: true,
					token: action.data.token,
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
					auth: null,
					token: '',
				},
            }
		case USER_REFRESH:
			if( localStorage.getItem('token')){
				return {
					...state,
					data_init: {
						email:  localStorage.getItem('email'),
						auth: true,
						token: localStorage.getItem('token'),
					},
				}
			}
			
		default:
			return state;
	}
};

export default userReducer;
