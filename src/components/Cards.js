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
                <Card />
            </View>
        );
    }
}

function mapStateToProps({categories, cards}) {
  return {
      categories,
      cards,
  }
};

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