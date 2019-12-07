
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

class CPalette extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <Text>COLOR PALLETES</Text>
            </View>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paletteContainer:{
        flex:3,
        flexDirection:'row', 

    },
}


export default CPalette;