import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Header, Item, Icon, Input, Button} from 'native-base';
import WordLoader from './src/wordLoader';
import SearchBox from './src/searchBox';
import axios from 'axios';


 class SearchScreen extends React.Component {
    state = {
        wordSearch: "",
        onCall:true,
        data: {}
    }
    searchWord = () =>{
        this.setState({onCall: true});
        var self = this;
        axios.get("https://jsonplaceholder.typicode.com/photos/"+this.state.wordSearch.toLowerCase())
        .then(function(response){
            self.setState({data: response.data});
            self.setState({onCall: false});

            
        })
        .catch (function(error){
            console.log(error);
        })
    }
    renderResult = () => {
        if(this.state.onCall) {
            return(
                <WordLoader />
            )
        } else {
            return(
                <SearchBox data={this.state.data}/>
            )

        }
    }
    

  render() {
      return (
          <View style={styles.container}>
              <View
              style={styles.searchStyle}>
                  <Item>
                      
                  
                  <Input
                    style={styles.inputStyle}
                    value={this.state.wordSearch}
                    placeholder="Type number only"
                    onChangeText={(wordSearch)=>this.setState({wordSearch})}
                  />

                  <Button
                  style={styles.searchButtonStyle}
                  onPress={this.searchWord}>
                    <Text style={styles.buttonText}>SEARCH</Text>
                  </Button>

                </Item>
                {/* <Icon name ="ios-search" onPress={this.searchWord}/> */}
               
              </View>

              {this.renderResult()}
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:10,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    searchButtonStyle: {
        backgroundColor:"#FFCB04", 
        width:80,
        
    },
    searchStyle:{
        marginTop:50,
        borderBottomColor:'white', 
    },

    buttonText: {
        color:'white',
        fontWeight:'bold',
        paddingHorizontal:10,
    },
    inputStyle:{
        borderBottomColor:'white',
    },
});

export default SearchScreen;