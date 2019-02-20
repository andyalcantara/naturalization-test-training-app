import React from 'react';
import { View, Text } from 'react-native';

class Cards extends React.Component {

    componentDidMount() {
        fetch('http://localhost:3000/questions', {
            method: 'GET'
        }).then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <View>
                <Text>Cards Component</Text>
            </View>
        );
    }
}

export default Cards;