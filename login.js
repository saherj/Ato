import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image, StatusBar, LayoutAnimation  } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null
    };
   
    // For the data that is going to change
    state = {
        email: "",
        password: "",
        errorMessage: null
    };


    handleLogin = () => {
        const {email, password} = this.state

        firebase.auth()
                .signInWithEmailAndPassword(email,password)
                .catch(error => this.setState({ errorMessage: error.message }));
    }
  
  
    render() {
      return (
          <View style={styles.container}>
                
                <StatusBar barStyle="light-content"></StatusBar>
                
                <Image source={require('../Ato/assets/ATO-02.png')} style={{ marginTop: 70, alignSelf:"center", width: 150, height: 150 }}></Image>
                
                <Image source={require('../Ato/assets/ATO-01.png')} style={{ position: "absolute", width: '100%', height: '100%' }}></Image>
                {/* <Image source={require("../assets/ATO-01.png")} style={{marginTop: -176, marginLeft: -50 }}>

                </Image> */}
                <Text style={styles.greeting}>
                    {'Get productive with Ato, now! '}
                </Text>

   
                {/* get error message when fail to load */}
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>


                {/* SIGN IN FORM */}
                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Adress</Text>
                            <TextInput 
                                style={styles.input} 
                                autoCapitalize="none" 
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                                >
                            </TextInput>
                    </View>
                    <View style={{marginTop: 11 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} 
                                   secureTextEntry autoCapitalize="none" 
                                   onChangeText={password => this.setState({ password })} 
                                   value={this.state.password}></TextInput>
                    </View>
                
                </View>

                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:"#FFF", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf:"center", marginTop:32}} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{color:"#414959", fontSize: 13}}>
                        Don't have an Ato account yet? <Text style={{fontWeight: "500", color: "#D97D0D"}}>Sign Up</Text>
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
        marginTop: 10,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "Avenir"
    },
    error: {
        color: "red",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center"
    },
    errorMessage: {
        marginTop: 10,
        height: 50,
        alignItems: "center"
    },
    form: {
        marginTop: 0,
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
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