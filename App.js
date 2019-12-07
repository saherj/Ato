
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
  apiKey: "AIzaSyDHmCkkb06oleKlu3LFtXeYHVLpsveoRgo",
  authDomain: "atoapp-b3516.firebaseapp.com",
  databaseURL: "https://atoapp-b3516.firebaseio.com",
  projectId: "atoapp-b3516",
  storageBucket: "atoapp-b3516.appspot.com",
  messagingSenderId: "1023881493310",
  appId: "1:1023881493310:web:b80df5d09a64a4fb918a6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ignore these warnings
YellowBox.ignoreWarnings(['RCTRootView cancelTouches', 'UIManager']);

// Create bottom tabs
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








