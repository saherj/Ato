import React from 'react';
import {View, Text, Image} from 'react-native';
import LottieView from "lottie-react-native";

class WordLoader extends React.Component {
   
       //load the lottie animation when start app
       componentDidMount() {
        this.animation.play();
  
      }
      resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
      };
    
    render(){

        return(
            <View style={styles.container}>
                {/* Lottie display - made by Taras Chernenko - files from Lottie file */}
            <View style={styles.animationContainer}>
                <LottieView
                
                    ref={animation => {
                    this.animation = animation;
                }}
                    style={{
                        
                        width: 300,
                        height: 300,
                        backgroundColor: 'white',
                    }}
                    source={require('../assets/star.json')}
                   />
            </View>
                {/* <Image
                    source={uri: "https://assets1.lottiefiles.com/temp/lf20_csjVxr.json"}
                    style ={StyleSheet.img}   
                    />             */}
                    
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height:300,
        width:300, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    animationContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop:0,
        
      },
}



export default WordLoader;