
import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import{ createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {YellowBox} from 'react-native';

// Get started screens
import GetStarted from './getstart';
import LoginScreen from './login';
import LoadingScreen from './loading';
import RegisterScreen from './register';

// Main app screens
import HomeScreen from './home';
import CanvasScreen from './canvas';
import SearchScreen from './search';
import ColorpickScreen from './colorpick';

// Get database from firebase
import * as firebase from 'firebase'

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPBjyKX44CG4LxKSvjy9lg-cPcDDejv1w",
  authDomain: "ato-app-561fa.firebaseapp.com",
  databaseURL: "https://ato-app-561fa.firebaseio.com",
  projectId: "ato-app-561fa",
  storageBucket: "ato-app-561fa.appspot.com",
  messagingSenderId: "411814149786",
  appId: "1:411814149786:web:2596a4648f54344ccb6923"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ignore these warnings
YellowBox.ignoreWarnings(['RCTRootView cancelTouches', 'UIManager']);

// Create bottom tabs with icons and labels, implied the imported main app screen to the App
const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={22} />
        )
      }
    }, 
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" color={tintColor} size={22} />
        )
      }
    },
    Colorpick: {
      screen: ColorpickScreen,
      navigationOptions: {
        tabBarLabel: "Color Picker",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-color-palette" color={tintColor} size={22} />
        )
      }
    },
    Canvas: {
      screen: CanvasScreen,
      navigationOptions: {
        tabBarLabel: "Canvas",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-brush" color={tintColor} size={22} />
        )
      }
    },
  }
)

// Get transition between screen, new screen is placed on top of stack
const AuthStack = createStackNavigator({
   Login: LoginScreen,
   Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);








