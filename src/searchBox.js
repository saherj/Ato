import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

class SearchBox extends React.Component {
    render(){
        var words = this.props.data;
        if(!words){
            return
            <View>Type max 3 numbers
                
            </View>

        }

        return(
            <ScrollView style={{flex:1}}>
                <Text style={styles.bodyText}> Number {words.id}  </Text>
                <Text style={styles.titleText}> {words.title}  </Text>
                <View style={styles.ViewStyle}>
                    <Image
                    style={styles.img}
                    source={{uri: words.url}}/>

                </View>

                
            </ScrollView>            
        )
    }
}

const styles = {
    bodyText: {
        marginTop:20,
        fontSize:30,
        color:'green',
        textAlign:'center',

    },
    ViewStyle: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }, 
    img: {
        width:300,
        height:300,
        justifyContent:'center', 
        alignItems:'center',
    },
    titleText:{
        color:'black',
        fontSize:30,
        fontWeight:'300',
        marginHorizontal:30,
        marginVertical:30,

    },
}

export default SearchBox;