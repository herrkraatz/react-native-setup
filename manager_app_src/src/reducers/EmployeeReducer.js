import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

// An object makes more sense than an array as we can use the key of the object to easily update the object
// not having to parse through an array, find the employee to update, update, and return ...
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    console.log('EmployeeReducer, action', action);
    /*
    {type: "employees_fetch_success", payload: {…}}
    payload:
        -LC7Q6Jkw2IO98kIuCRi:
            {name: "t", phone: "6", shift: "Monday"}
        -LC7TyV_f_PZnKLHtTEJ:
            {name: "Alex", phone: "6666", shift: "Monday"}
        -LC7UW2wyno3rjF4vtbW:
            {name: "y", phone: "9", shift: "Monday"}
        -LC7Wp4yx43MahqSciXy:
            {name: "u", phone: "4", shift: "Wednesday"}
        __proto__:
            Object
    type:
        "employees_fetch_success"
    */

    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};