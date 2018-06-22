import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers ({
    // simple array to start with
    // banana: () => []
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});