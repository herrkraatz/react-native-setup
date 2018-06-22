// Import libraries for making components
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    // use style prop
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: 'yellow',
        justifyContent: 'center', // other: 'flex-start', 'flex-end' // vertical positioning
        alignItems: 'center', // other: 'flex-start', 'flex-end' // horizontal positioning
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export { Header };