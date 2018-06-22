import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';


// Only one action creator for different props (name, phone, shift)
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    // we need to dispatch as we want to clear out the form (to delete the just inserted name,phone,shift of employee
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                // Actions.employeeList({ type: 'reset' });
                Actions.pop();
            });
    };
};

// IMPORTANT: Not only fired when we fetch employees, but also firebase fires " .on('value', snapshot => { "
// automatically whenever there is a new value under the reference
export const employeesFetch = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        // on 'value': if there are values, call fat arrow function
        // with snapshot object that is reference (and metadata) to all data
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })

            });

    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {

    const { currentUser } = firebase.auth();

    // console.log('employeeSave action creator, currentUser.uid', currentUser.uid);
    // console.log('employeeSave action creator', name, phone, shift, uid);

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                console.log('Saved.');
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.pop();
            });
    };
};

export const employeeDelete = ({ uid }) => {

    const { currentUser } = firebase.auth();

    // no dispatch needed as firebase pushes an update to our react app automatically
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                console.log('Removed.');
                Actions.pop();
            });
    };
};