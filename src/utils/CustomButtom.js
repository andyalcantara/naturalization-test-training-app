import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButtom = (props) => {
    return (
        <TouchableOpacity style={[props.style, styles.button]} onPress={props.onPress}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   button: {
       borderRadius: 7
   }
});

export default CustomButtom;
