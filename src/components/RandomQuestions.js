import React from 'react';
import {View, Text, Button} from 'react-native';

import {connect} from 'react-redux';
import {handleQuestions} from "../actions/shared";
import Card from "./Card";

class RandomQuestions extends React.Component {

    state = {
        counter: 0
    };

    componentDidMount() {
        const {onReceiveQuestions} = this.props;
        onReceiveQuestions();
    }

    generateIndexes = () => {
        const {cards} = this.props;
        return Math.floor(Math.random() * cards.length);
    };

    handleAnswer = () => {
        this.setState(previousState => ({
            counter: previousState.counter + 1
        }))
    };

    render() {

        const {cards} = this.props;
        const {counter} = this.state;

        let randomCards = [];
        let question;
        let answer;

        for (var i = 0; i < 10; i++) {
            randomCards.push(cards[`${this.generateIndexes()}`])
        }

        if (randomCards.length > 0) {

            question = randomCards[counter].question;
            answer = randomCards[counter].answer;

            return (
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text>Random Questions</Text>
                    <View style={{flex: 3, padding: 5, width: '90%', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', borderColor: 'blue', borderWidth: 1, borderRadius: 6}}>
                            <Card question={question} answer={answer} />
                        </View>

                        <Button title='Next' onPress={this.handleAnswer}/>
                    </View>

                </View>
            );
        }
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
