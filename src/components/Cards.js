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

        const { cards, categories } = this.props;

        console.log(cards, 'Cards');
        console.log(categories, 'Categories');

        return (
            <View>
                {cards.map(card => (
                    <Card question={card.question} answer={card.answer}/>
                ))}
            </View>
        );
    }
}

function mapStateToProps({categories, cards}) {

  return {
      categories: Object.keys(categories).map(key => categories[key]),
      cards: Object.keys(cards).map(key => cards[key]),
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards);