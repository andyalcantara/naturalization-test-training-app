import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from "./Card";

import { connect } from 'react-redux';

import { handleQuestions } from '../actions/shared';

class Cards extends React.Component {

    componentDidMount() {
        const { onReceiveQuestions } = this.props;

        onReceiveQuestions();
    }

    render() {

        const { cards } = this.props;

        console.log(cards, 'Cards');

        return (
            <View style={{padding: 5}}>
                <FlatList
                    data={cards}
                    renderItem={({card}) => (
                        <Card question={card.question} answer={card.answer}/>
                    )}
                />
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
