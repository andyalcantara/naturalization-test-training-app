import React from 'react';
import { View, Text } from 'react-native';
import Card from "./Card";

import { connect } from 'react-redux';

import { handleQuestions } from '../actions/shared';

class Cards extends React.Component {

    componentDidMount() {

        this.props.dispatch(handleQuestions());

        fetch('http://localhost:3000/categories', {
            method: 'GET'
        }).then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <View>
                <Card />
            </View>
        );
    }
}

export default connect()(Cards);