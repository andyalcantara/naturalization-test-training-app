import React from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {handleQuestions} from "../actions/shared";

class RandomQuestions extends React.Component {

    componentDidMount() {
        const {onReceiveQuestions} = this.props;
        onReceiveQuestions();
    }

    generateIndexes = () => {
        const {cards} = this.props;
        return Math.floor(Math.random() * cards.length);
    };

    render() {
        const {cards} = this.props;
        let randomCards = [];

        for (var i = 0; i < 10; i++) {
            randomCards.push(cards[`${this.generateIndexes()}`])
        }



        return (
            <View>
                <Text>Random Questions</Text>
                {
                    randomCards.forEach(card => console.log(card['id']))
                }
            </View>
        );
    }
}

function mapStateToProps({cards}) {

    return {
        cards: Object.keys(cards).map(key => cards[key]).sort((a, b) => {
            parseInt(b.id, 10) - parseInt(a.id)
        })
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
