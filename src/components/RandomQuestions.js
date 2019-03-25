import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import {handleQuestions} from "../actions/shared";

class RandomQuestions extends React.Component {

    componentDidMount() {
        const { onReceiveQuestions } = this.props;
        onReceiveQuestions();
    }

    generateIndex = () => {
        const { cards } = this.props;

        return Math.floor(Math.random() * cards.length)
    };

    render() {
        const { cards } = this.props;
        console.log(Math.floor(Math.random() * 20));
        console.log(cards[`${Math.floor(Math.random() * 20)}`]);
        return (
            <View>
                <Text>Random Questions</Text>
                {this.generateIndex}
            </View>
        );
    }
}

function mapStateToProps({ cards }) {

    console.log(cards);

    return {
        cards: Object.keys(cards).map(key => cards[key])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReceiveQuestions: () => {
            dispatch(handleQuestions());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuestions);
