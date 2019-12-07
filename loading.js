import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "App" : "Auth")
    })
  }
    render() {
      return (
          <View style={styles.container}>
              <Text>Loading...</Text>
              {/* Get a progress indicator */}
              <ActivityIndicator size="large"></ActivityIndicator>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});