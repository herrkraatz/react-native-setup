import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {

    console.log('EmployeeFormReducer, action', action);

    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload looks like { prop: 'name', value: 'jane' }
            // Not so nice:
            // const newState = {};
            // newState[action.payload.prop] = action.payload.value;
            // return { ...state, ...newState };

            // Better:
            // key interpolation: [action.payload.prop] turns into a key on the fly
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            // reset all form data
            // return { ...state, ...INITIAL_STATE };
            // better:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }
};