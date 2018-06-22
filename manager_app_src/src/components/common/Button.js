import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {

    const { textStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={buttonStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff', // iOS blue
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch', // flex: position itself until the limits of the container
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff', // iOS blue
        marginLeft: 5,
        marginRight: 5
    }
};

// if we use export * from ... in index.js, we may not use export default anymore !!
// export default Button;

// ES5
// export { Button: Button };
// ES6
export { Button };
