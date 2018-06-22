import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        // we default very first view of Picker to Monday (shift = '' at the very first view)
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {

        // console.log('EmployeeCreate component, render employee', this.props.employee);
        // either with data if on employee was clicked
        // EmployeeCreate component, render employee {name: "Johnny", phone: "222", shift: "Monday", uid: "-LCF8xDK5sDBLXZ4VLRF"}
        // or undefined if Add was clicked
        // EmployeeCreate component, render employee undefined
        return (
           <Card>
               <EmployeeForm {...this.props} />
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                   </Button>
               </CardSection>
           </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);