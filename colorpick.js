
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CPallete from './src/palette';

class ColorpickScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is Colorpick Screen</Text>
                <CPallete />
                <CPallete />
                <CPallete />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default ColorpickScreen;