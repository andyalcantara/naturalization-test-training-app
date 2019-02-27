import React from 'react';
import { View, Text } from 'react-native';
import Card from "./Card";

import { connect } from 'react-redux';

import { handleQuestions, handleCategories } from '../actions/shared';

class Cards extends React.Component {

    componentDidMount() {
        const { onReceiveQuestions, onReceiveCategories } = this.props;

        onReceiveQuestions();
        onReceiveCategories();
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
            dispatch(handleQuestions());
        },

        onReceiveCategories: () => {
            dispatch(handleCategories());
        }
    }
};

export default connect(null, mapDispatchToProps)(Cards);