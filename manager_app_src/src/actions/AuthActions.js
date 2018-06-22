import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_START
} from './types';

// Regular/sync action creators:
// action creators are functions
// Must return an action
// action object must contain a type property
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

// Async action creators:
// action creators are functions
// Must return a FUNCTION
// FUNCTION will be called automatically using dispatch;
// dispatch will execute when async operation is finished
export const loginUser = ({ email, password }) => {
    return (dispatch) => {

        dispatch ({ type: LOGIN_USER_START });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log('loginUser action creator Existing User', user);
                loginUserSuccess(dispatch, user);
            })
            .catch((error) => {
                console.log('loginUser action creator Error 1', error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => {
                        console.log('loginUser action creator New User', user);
                        loginUserSuccess(dispatch, user);
                    })
                    .catch((error) => {
                        console.log('loginUser action creator Error 2', error);
                        console.log('loginUser Failed.');
                        loginUserFail(dispatch);
                    });
            });
    }

};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};