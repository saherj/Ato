
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
                                    <Text>Test1</Text>

                                </View>
                                <View style= {styles.minicard}>
                                    <Text>Test2</Text>

                                </View>
                                <View style= {styles.minicard}>
                                    <Text>Test3</Text>

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
        marginTop:10,
       paddingHorizontal:20,
        backgroundColor:'#FFCB04',
        borderRadius:20
    },
    
    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:15,
        marginVertical:0,
        
    },
    
    folderContainer: {
        flex:3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        width:500,
        height:200,
        justifyContent: 'space-evenly',
        backgroundColor:'red',
        
    },
    minicard: { 
        marginVertical:15,
        borderColor: 'white',
        backgroundColor: 'white',
        borderWidth:1,
        borderRadius:10,
        alignItems: 'center',
        paddingHorizontal:10,
        paddingVertical:6,
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

    
}

export default Folder;