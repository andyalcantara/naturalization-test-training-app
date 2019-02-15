import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Study from './src/components/Study';
import Test from './src/components/Test';

import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Study: {
    screen: Study,
  },
  Test: {
    screen: Test
  }
});

const AndroidTabNavigator = createMaterialTopTabNavigator(TabNavigator);

const IosAppContainer = createAppContainer(TabNavigator);
const AndroidAppContainer = createAppContainer(AndroidTabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios'
          ? <IosAppContainer />
          : <AndroidAppContainer />
        }
        <IosAppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
