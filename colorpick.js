
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ColorpickScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Colorpick Screen</Text>
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