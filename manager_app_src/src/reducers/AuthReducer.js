import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from '../actions/types';

// we also put it in here to know which properties are in the reducer
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {

    console.log('AuthReducer, action', action);

    switch (action.type) {
        case EMAIL_CHANGED:
            // we need to return a new object in memory to trick redux
            // otherwise redux will not see a difference between previous and current state
            // and components will not be re-rendered
            // email: action.payload will overwrite email: ''
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            // also reset the error message on success
            // also reset the spinner
            // also reset email and password to NOT to cache it in case we navigate back to login form
            // return { ...state, user: action.payload, error: '', loading: false, email: '', password: '' };
            // better as we reset ALL:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            // for security reasons, clear out password field as well
            // also reset the spinner
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case LOGIN_USER_START:
            // also reset the error message on start in case it there was an error before;
            // so user starts from scratch and knows something is happening again
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};