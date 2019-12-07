import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase'

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
                <View>
                    
                    <Text>Hi {this.state.email}!</Text>

                    <TouchableOpacity style={{ marginTop: 32 }} onPress={this.signOutUser}>
                        <Text>Log out</Text>
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
    }
});