import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    // style property can take an array of styles; the one to the right will overwrite the left one(s)
    return (
      <View style={[styles.containerStyle, props.style]}>
          {props.children}
      </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', // also 'column' for vertical positioning
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };