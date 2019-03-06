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
    },

    superContainer: {
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 6,
        padding: 20,
        marginTop: 20,
    }
});

export default Card;