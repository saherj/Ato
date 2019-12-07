
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

class Folder extends React.Component {

    render(){
        return (
                    <View>
                        <View>
                            <Text style={styles.subheading}>Folders</Text>
                        </View>
                        <View style={styles.container4}>
                            <View style= {styles.folderContainer}>
                                <View style= {styles.minicard}>
                                <Image style={styles.minicardimage}
                                        source={ require('../assets/folder96.png')}/>
                                    <Text>Atto App</Text>

                                </View>
                                <View style= {styles.minicard}>
                                <Image style={styles.minicardimage}
                                        source={ require('../assets/folder96.png')}/>
                                    <Text>IOT Web</Text>

                                </View>
                                <View style= {styles.minicard}>
                                <Image style={styles.minicardimage}
                                        source={ require('../assets/folder96.png')}/>
                                    <Text>Wall Art</Text>

                                </View>
                                <View style= {styles.minicard}>
                                <Image style={styles.minicardimage}
                                        source={ require('../assets/folder96.png')}/>
                                <Text>Desk</Text>

                                </View>
                                <View style= {styles.minicard}>
                                <Image style={styles.minicardimage}
                                        source={ require('../assets/folder96.png')}/>
                                <Text>Trends</Text>

                                </View>
                                <View style= {styles.minicard}>
                                <Image style={styles.minicardimage}
                                        source={ require('../assets/addfolder96.png')}/>
                                
                                    <Text>Add New</Text>

                                </View>
                            </View>
                            
                                
                           
                        </View>
            </View>
        );
}
}

const styles = {

    container4: {
        height:170,
        marginTop:5,
       paddingHorizontal:20,
        backgroundColor:'#FFCB04',
        borderRadius:20
    },
    
    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:15,
        marginVertical:0,
        marginHorizontal:10,
       
        
    },
    
    folderContainer: {
        flex:3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:'120%',
        height:200,
        justifyContent: 'space-evenly',
        
        marginHorizontal:-25,

        
    },
    minicard: { 
        height:80,
        width:100,
        marginVertical:10,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth:1,
        borderRadius:10,
        alignItems: 'center',
        
    },

    minicardtext: {
        
        marginTop:0,
        margin:15,
        
        marginVertical:10,
        fontWeight: '600',
        fontSize:15,
        backgroundColor: 'white',
        textAlign: 'center',
    },

    mainImage: {
        width:64,
        height:64,
    },

    minicardimage:{
        width:54,
        height:54,
    },
    
}

export default Folder;