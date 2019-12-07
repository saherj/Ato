import React from 'react';
import {View, Text, Image} from 'react-native';

class WordLoader extends React.Component {
    render(){
        return(
            <View>
                {/* <Image
                    source={uri: "https://media.giphy.com/media/it3SErBlJmj60/giphy.gif"}
                    style ={StyleSheet.img}   
                    />             */}
                    <Text>loading image here</Text>
            </View>
        )
    }
}

const styles = {
    img: {
        height:300,
        width:300, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}



export default WordLoader;