import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class RandomQuestions extends React.Component {

    generateIndex = () => {
        const { cards } = this.props;

        return Math.floor(Math.random() * cards.length)
    }

    render() {
        const { cards } = this.props;
        console.log(Math.floor(Math.random() * 100));
        return (
            <View>
                <Text>Random Questions</Text>
                {this.generateIndex}
            </View>
        );
    }
}

function mapStateToProps({ cards }) {

    return {
        cards: Object.keys(cards).map(key => cards[key])
    }
}

export default connect(mapStateToProps)(RandomQuestions);
