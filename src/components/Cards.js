import React from 'react';
import { View, Text } from 'react-native';
import Card from "./Card";

import { connect } from 'react-redux';

import { handleQuestions } from '../actions/shared';

class Cards extends React.Component {

    componentDidMount() {
        const { onReceiveQuestions } = this.props;

        onReceiveQuestions();

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

const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveQuestions: () => {
            dispatch(handleQuestions())
        }
    }
};

export default connect(null, mapDispatchToProps)(Cards);