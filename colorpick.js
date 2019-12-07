import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CPallete from './src/palette';

export default class ColorpickScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Ato/assets/ATO-01.png')} 
                       style={{ position: "absolute", width: '100%', height: '100%' }}>
                </Image>

                <View style={{ position: "absolute", top: 34, alignItems: "center", width: "100%" }}>

                    <Text style={styles.greeting}>
                        {'Find color code.'}
                    </Text>

                     {/* This is suppose to be the area where the user pick a color */}
                    <Image source={require('../Ato/assets/color-wheel.png')} 
                       style={{ marginTop: 20, alignSelf:"center", width: 300, height: 300 }}>
                    </Image>

                </View>

                {/* This is suppose to be the place where the code shows up after the user click on the color wheel */}
                <View style={{ position: "absolute", bottom: 70, alignItems: "center", width: "100%" }}>
                    <Text style={styles.code}>
                        #FFFFF
                    </Text>
                </View>
                

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
    },
    greeting: {
        marginBottom: 32,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "Avenir",
        marginTop:20,
    },
    code: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#d6d7da',
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "Avenir",
        color: '#000',
        padding: 20,
        width: "50%"

    }
});