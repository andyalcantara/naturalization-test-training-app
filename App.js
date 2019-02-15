import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

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
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;

      if (routeName === 'Study') {
        return <Ionicons name="ios-book" size={30} color={tintColor} />
      }

      if (routeName === 'Test') {
        return <Ionicons name="ios-fitness" size={30} color={tintColor} />
      }
    },
  }),
});

const AndroidTabNavigator = createMaterialTopTabNavigator({
  Study: {
    screen: Study,
  },
  Test: {
    screen: Test
  }
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;

      if (routeName === 'Study') {
        return <Ionicons name="ios-book" size={30} color={tintColor} />
      }

      if (routeName === 'Test') {
        return <Ionicons name="ios-fitness" size={30} color={tintColor} />
      }
    },
  }),
});

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
