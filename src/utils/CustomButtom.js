import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CustomButtom = (props) => {
    return (
        <TouchableOpacity style={props.styles}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButtom;
