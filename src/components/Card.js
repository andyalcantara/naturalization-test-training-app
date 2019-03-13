import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.superContainer}>
            <View style={styles.container}>
                <Text>{props.question}</Text>
                <Text>{props.answer}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    superContainer: {
        flex: 1,
        padding: 10,
        marginTop: 10,
    }
});

export default Card;
