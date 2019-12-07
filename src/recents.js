
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

class Recent extends React.Component {

    render(){
        return (
                    <View>
                        <View>
                            <Text style={styles.subheading}>Recent</Text>
                        </View>
                        <View style={styles.cardcontainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('../assets/inspiration1.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Ato App</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('../assets/inspiration2.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Graffitii Allay</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('../assets/inspiration3.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Bicycle App</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('../assets/inspiration4.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Meseum</Text>
                                </View>
                            </ScrollView>
                        </View>
            </View>
        );
}
}

const styles = {

    container4: {
        height:190,
        marginTop:10,
       paddingHorizontal:10,
        backgroundColor:'#FFCB04',
        borderRadius:20
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
        height:90,
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
    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:30,
        marginVertical:0,
        marginHorizontal:10
        
    },
}

export default Recent;