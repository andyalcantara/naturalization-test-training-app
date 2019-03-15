import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.superContainer}>
            <View style={styles.container}>
                <Text style={styles.question}>{props.question}</Text>
                <Text style={styles.answer}>{props.answer}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
    },

    superContainer: {
        flex: 1,
        padding: 10,
        marginTop: 10,
    },

    question: {
        marginTop: 0,
        fontSize: 16,
        fontWeight: 'bold'
    },

    answer: {
        marginTop: 30,
        alignContent: 'center',
    }
});

export default Card;
