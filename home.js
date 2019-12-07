import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

import * as firebase from 'firebase'

import Folders from './src/folders';
import Recent from './src/recents';

export default class HomeScreen extends Component {
    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Ato/assets/ATO-01.png')} style={{ position: "absolute", width: '100%', height: '100%' }}></Image>
                <View style={styles.container2}>
                    <View>
                        <Text style={styles.nameStyle}>Hi {this.state.displayName} !</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
                            <Text style={styles.buttonText}>LOG OUT</Text>
                        </TouchableOpacity>

                        <View>
                            <View style={styles.cards}>
                                <Text>
                                    testing
                                </Text>
                            </View>
                            
                        </View>

                    </View>
                </View>

                <View style={styles.container3}>
                     <Folders />
                    
                
                
                    <Recent />
                        
               </View>     
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    container2: {
        marginTop:60,
        marginHorizontal:20,
        flexDirection:'column',

    },
    container3: {
        height:600,
        marginTop:40,
       paddingHorizontal:20,
        backgroundColor:'#FFCB04',
        borderRadius:20
    },

    container4: {
        height:200,
        marginTop:10,
       paddingHorizontal:20,
        backgroundColor:'#FFCB04',
        borderRadius:20
    },
    cards:{
        marginTop:20,
        height:60, 
        backgroundColor:'white',
        padding:20,
        borderRadius:5,
        
    },
    signOutButton:{
        width:150,
        marginTop: 32,
        backgroundColor:'white', 
        padding:15,
        borderRadius:10,
    },
    buttonText: {
        color:'#FFCB04',
        fontWeight:'bold',
        justifyContent:'center',
        fontSize:20,
        fontWeight:'700',
        // textDecorationLine: 'underline',
    },

    nameStyle: {
        fontSize:30,
        fontWeight:'600',
    },
   
   
    
});