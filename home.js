import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
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
                <View style={styles.container2}>
                    <View>
                        <Text style={styles.nameStyle}>Hi {this.state.displayName} !</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.signOutButton} onPress={this.signOutUser}>
                            <Text style={styles.buttonText}>LOG OUT</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.container3}>
                    <View>
                        <Text style={styles.subheading}>Folders</Text>
                    </View>
                    <View style={styles.cardcontainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/inspiration1.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Ato App</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/inspiration2.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Graffitii Allay</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/inspiration3.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Bicycle App</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/inspiration4.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Meseum</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View>
                            <View style={styles.cards}>
                                <Text>
                                    testing
                                </Text>
                            </View>
                            <View style={styles.cards}>
                                <Text>
                                    testing
                                </Text>
                            </View>
                            
                        </View>
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
        height:400,
        marginTop:180,
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
    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:15,
        marginVertical:0,
        
    },
    mediumcardimage: {
        margin:0,
       borderRadius:10,
        padding:0,
        marginTop:15,
        marginLeft:15,
        marginRight:0,
        backgroundColor: '#FFCB04',
        resizeMode: 'cover',
        width: 130,
        height:100,
    },

    mediumcardtext: {
        marginTop:-10,
        fontWeight: '500',
        fontSize:15,
        textAlign:'left',
        marginLeft:15,
        padding:5,
        backgroundColor:'white',
    },
    cardcontainer: {
        flexDirection: 'column',
        paddingRight:0,
        marginLeft:-10, 
       
    },
    
});