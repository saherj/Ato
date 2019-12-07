import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
   
    // For the data that is going to change
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        errorMessage: null
    };
 

    // Input data from user to firebase
    handleSignUp = () => {
        firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(userCredentials => {
                    return userCredentials.user.updateProfile({
                        displayName: this.state.firstname
                    });
                })
                .catch(error => this.setState({ errorMessage: error.message }));
    };


   
  
    render() {
      return (
          <View style={styles.container}>
                 <Image source={require('../Ato/assets/ATO-01.png')} style={{ position: "absolute", width: '100%', height: '100%' }}></Image>
                
                <View style={{ position: "absolute", top: 34, alignItems: "center", width: "100%" }}>
                    <Text style={styles.greeting}>
                        {'Sign up to get productive with Ato!'}
                    </Text>


                </View>
   
                {/* get error message when fail to load */}
                


                {/* SIGN IN FORM */}
                
                <View style={styles.form}>
               

                    <View>
                        <Text style={styles.inputTitleStyle}>First Name</Text>
                            <TextInput 
                                style={styles.input} 
                                autoCapitalize="none" 
                                onChangeText={firstname => this.setState({ firstname })}
                                value={this.state.firstname}
                                >
                            </TextInput>
                    </View>

                    <View style={{marginTop: 30 }}>
                        <Text style={styles.inputTitleStyle}>Last Name</Text>
                            <TextInput 
                                style={styles.input} 
                                autoCapitalize="none" 
                                onChangeText={lastname => this.setState({ lastname })}
                                value={this.state.lastname}
                                >
                            </TextInput>
                    </View>

                    <View style={{marginTop: 30 }}>
                        <Text style={styles.inputTitleStyle}>Email Adress</Text>
                            <TextInput 
                                style={styles.input} 
                                autoCapitalize="none" 
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                >
                            </TextInput>
                    </View>
                    
                    <View style={{marginTop: 30 }}>
                        <Text style={styles.inputTitleStyle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none" onChangeText={password => this.setState({ password })} value={this.state.password}></TextInput>
                    </View>
                
                </View>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                {/* BUTTONS */}

                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color:"#FFF", fontWeight: "500"}}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:"center", marginTop:32}}>
                    <Text style={{color:"#414959", fontSize: 13}}>
                        Don't have an Ato account yet? <Text style={{fontWeight: "500", color: "#D97D0D"}}>Login</Text>
                    </Text>
                </TouchableOpacity>
                
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginBottom: 32,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "Avenir"
    },
    error: {
        marginTop: 0,
        color: "#D91A2A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    errorMessage: {
        marginTop: 0,
        height: 20,
        alignItems: "center"
    },
    form: {
        marginTop: 90,
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitleStyle: {
        color: "#8A8F9E",
        fontSize: 11,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#FFCB04",
        borderRadius:50,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }

}); 