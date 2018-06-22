import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        // we call action creator here to fetch all employees
        // and put them into new reducer to be used via mapStateToProps
        // and then to be linked to EmployeeList component
        this.props.employeesFetch();
        this.createDataSource(this.props);

    }

    // nextProps are the next set of props that the component will get rendered with
    // this.props is still the old state of props
    // So this will be INITIALLY fill the component the very first time it is loaded
    // whereas componentWillMount will be called after the component will be garbaged / unmounted
    // when navigating to next compponent (create employee) and coming back again !
    componentWillReceiveProps(nextProps) {

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        console.log('render in Employee List, this.props', this.props);
        // console.log('render in Employee List, ListView', ListView);

        return (
            // <View>
            //     <Text>Employee List</Text>
            //     <Text>Employee List</Text>
            //     <Text>Employee List</Text>
            //     <Text>Employee List</Text>
            //     <Text>Employee List</Text>
            // </View>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        console.log('lodash map function in Employee List', val, uid, { ...val, uid });
        return { ...val, uid }; // { name: 'S', phone: '555', shift: 'Monday', uid: 'erer545' }
    });

    console.log('lodash result in Employee List', employees);
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);