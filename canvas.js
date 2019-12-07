
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class CanvasScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image source={require('../Ato/assets/canvas-bg.jpg')} 
                       style={{ position: "absolute", width: '100%', height: '100%' }}>
                </Image>

                <View style={{ position: "absolute", top: 34, alignItems: "center", width: "100%" }}>
                    <Text style={styles.greeting}>
                        {'Release your inner creativity here!'}
                    </Text>
                </View>

            {/* Writing Style Buttons */}
                <View style={{ position: "absolute", bottom: 10, alignItems: "center", right: 5}}>

                    {/* This is suppose to be a Pen Button */}
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../Ato/assets/ballpoint.png')} 
                            style={{ marginBottom: 10, alignSelf:"center", width: 50, height: 50 }}>
                        </Image>
                    </TouchableOpacity>

                     {/* This is suppose to be a Pencil Button */}
                    <TouchableOpacity>
                        <Image source={require('../Ato/assets/pencil.png')} 
                            style={{ marginBottom: 10, alignSelf:"center", width: 50, height: 50 }}>
                        </Image>
                    </TouchableOpacity>

                     {/* This is suppose to be an Eraser Button */}
                    <TouchableOpacity>
                        <Image source={require('../Ato/assets/eraser.png')} 
                            style={{ marginBottom: 10, alignSelf:"center", width: 50, height: 50 }}>
                        </Image>
                    </TouchableOpacity>

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
});