import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const data = [
    { id: 0, title: '10 Random Questions of the day', icon: 'shuffle' },
    { id: 1, title: 'Study Content', icon: 'list-box' },
    { id: 2, title: 'Cards', icon: 'albums' }
]

class Study extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Study your Material</Text>

                <View style={{padding: 10, marginTop: 40}}>
                    <TouchableOpacity style={styles.sections} onPress={() => alert("I was pressed")}>
                        {Platform.OS === 'ios' ? <Ionicons style={{marginLeft: 20}} name="ios-shuffle" size={30}/> : <Ionicons name={'md-shuffle'} size={30}/>}
                        <Text style={{marginLeft: 20}}>10 Random Questions of the day</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sections} onPress={() => alert("I was pressed")}>
                        {Platform.OS === 'ios' ? <Ionicons style={{marginLeft: 20}} name={'ios-list-box'} size={30}/> : <Ionicons name={'md-list-box'} size={30}/>}
                        <Text style={{marginLeft: 20}}>Study Content</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sections} onPress={() => this.props.navigation.navigate('Cards')}>
                        {Platform.OS === 'ios' ? <Ionicons style={{marginLeft: 20}} name={'ios-albums'} size={30}/> : <Ionicons name={'md-albums'} size={30}/>}
                        <Text style={{marginLeft: 20}}>Cards</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 20,
        alignSelf: 'center',
    },

    sections: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'darkblue',
        height: 40,
        marginTop: 10,
    }
});

export default Study;