import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import {handleCategories} from "../actions/shared";

class StudyContent extends React.Component {

    state = {
        firstCat: false
    };

    componentDidMount() {
        const { onGettingCategories } = this.props;
        onGettingCategories();
    }

    render() {

        const { categories } = this.props;
        const { firstCat } = this.state;

        return (
            <View>
                {categories.map(category => (
                    <View>
                        <TouchableOpacity style={styles.title} onPress={() => this.setState({ firstCat: true })}>
                            <Text>{category.title}</Text>
                        </TouchableOpacity>
                        {firstCat ? <Text>{category.subCategories.A.title}</Text> : <Text></Text>}
                    </View>
                ))}
            </View>
        );
    }
}

function mapStateToProps({ categories }) {
    return {
        categories: Object.keys(categories).map(key => categories[key]),
    }
}

function mapDispatchToProps(dispatch) {

    return {
        onGettingCategories: () => {
            dispatch(handleCategories())
        }
    }
}

const styles = StyleSheet.create({
   title: {
       fontWeight: 'bold'
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(StudyContent);
