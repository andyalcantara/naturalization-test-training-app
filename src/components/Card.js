import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <Text>{props.question}</Text>
                <Text>{props.answer}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    superContainer: {
        flex: 1
    }
});

export default Card;