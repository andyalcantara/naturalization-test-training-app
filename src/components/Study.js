import React from 'react';
import { Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';

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
                <FlatList
                    style={{marginTop: 40, padding: 10}}
                    data={data}
                    keyExtractor={(item) => item.title}
                    renderItem={({item}) => <TouchableOpacity style={styles.sections} key={item.id} onPress={() => alert("I was pressed")}>
                                                {Platform.OS === 'ios' ? <Ionicons style={{marginLeft: 20}} name={'ios-' + item.icon} size={30}/> : <Ionicons name={'md-' + item.icon} size={30}/>}
                                                <Text style={{marginLeft: 20}}>{item.title}</Text>
                                            </TouchableOpacity>}
                />
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