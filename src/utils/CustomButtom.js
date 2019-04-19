import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButtom = (props) => {
    return (
        <TouchableOpacity style={[props.style, styles.button]} onPress={props.onPress}>
            <Text style={{color: 'white'}}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   button: {
       borderRadius: 7,
       width: 120,
       height: 30,
       alignItems: 'center',
       justifyContent: 'center',
       paddingLeft: 8,
       paddingRight: 8,
   }
});

export default CustomButtom;
