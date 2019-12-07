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
                    <View style={styles.topFlex} >
                        <Text style={styles.nameStyle}>Hi {this.state.displayName} !</Text>
                        <View>
                        <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
                            <Text style={styles.buttonText}>LOG OUT</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        

                        <View style={styles.cards}>
                            <View style={styles.hrline}></View>
                            <Text style={styles.cardsText} >
                                Upcomming Event: Art Meseum Tues 6:30 pm
                            </Text>
                            <View style={styles.hrline}></View>
                            <Text style={styles.cardsText} >
                                Meeting with Art Director at Wed 6:30 pm
                            </Text>
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
        marginTop:20,
       paddingHorizontal:20,
        backgroundColor:'#FFCB04',
        borderRadius:20
    },

    
    cards:{
        
        height:100, 
        backgroundColor:'white',
        padding:20,
        borderRadius:5,
        marginTop:70,
        marginBottom:0,
        
    },
    signOutButton:{
        width:150,
        marginTop: -40,
        backgroundColor:'white', 
        padding:15,
        marginLeft:245,
        borderRadius:10,
        
    },
    buttonText: {
        color:'#FFCB04',
        fontWeight:'bold',
        justifyContent:'center',
        alignContent:'center',
        fontSize:15,
        fontWeight:'700',
        // textDecorationLine: 'underline',
    },

    nameStyle: {
        fontSize:30,
        fontWeight:'600',
    },
    cardsText:{
        fontSize:12,
        fontWeight:'bold',

    },
    hrline:{
        height:2,
        backgroundColor:"#FFCB04",
        width:'100%',
        marginVertical:10,
       
    },

    
   
   
    
});