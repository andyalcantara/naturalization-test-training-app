import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import Card from "./Card";

import {connect} from 'react-redux';

import {handleQuestions} from '../actions/shared';

class Cards extends React.Component {

    state = {
        counter: 0
    };

    componentDidMount() {
        const {onReceiveQuestions} = this.props;

        onReceiveQuestions();
    }

    handleAnswer = () => {
        this.setState(previousState => ({
            counter: previousState.counter + 1
        }))
    };

    render() {

        const {cards} = this.props;
        const {counter} = this.state;

        let question;
        let answer;

        if (cards[counter]) {
            question = cards[counter].question;
            answer = cards[counter].answer;
        }

        return (
            <View style={{flex: 1, alignItems: 'center'}}>

                <View style={{flex: 3, padding: 5, width: '90%', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', borderColor: 'blue', borderWidth: 1, borderRadius: 6}}>
                        <Card question={question} answer={answer}/>
                    </View>

                    <Button title='Correct' onPress={this.handleAnswer} />
                    <Button title='Incorrect' onPress={this.handleAnswer} />
                </View>

            </View>
        );
    }
}

function mapStateToProps({categories, cards}) {

    return {
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
