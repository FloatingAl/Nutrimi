import React, { Component } from 'react'
import { Animated, AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import {createSwitchNavigator } from 'react-navigation'
import { Input, Card , Button} from 'react-native-elements'
import { Buffer } from 'buffer';
import axios from 'axios';
//import storeMiscToJSON from './JSONfunctions'

export class Signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      
      username: "",
      email: "",
      address: "",

    }
  }
  
  _showMore = () => {

    axios.post("http://206745e1.ngrok.io/user/", {
        username: this.state.username,
        email: this.state.email,
        address: this.state.address
      
    }).then((response) => {
      console.log(response.data)
    })
   this.props.navigation.navigate('SecondScreen')
}
  render() {
    return (
      <View style = {styles.container}>
          <Card title = "Signup Screen" 
          containerStyle={{width: 350, height: 350, marginBottom: 30}}>
          <Input
              placeholder = "Email"
              onChangeText = {(email) => this.setState({email})}
              containerStyle={styles.input}
          />
          
          <Input
              placeholder = "Address"
              onChangeText = {(address) => this.setState({address})}
              containerStyle={styles.input}
          />
          

          <Input
              placeholder = "Username"
              onChangeText = {(username) => this.setState({username})}
              containerStyle={styles.input}
          />
          
          {/* <Input
              placeholder = "Password"
              onChangeText = {(password) => this.setState({password})}
              containerStyle={styles.input}
          /> */}
          </Card>
          <Button
            title="Register"
            onPress = {this._showMore}
            containerStyle={styles.inputButton}
          />
        </View>
    )
  }
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    marginBottom: 30,
  },
  inputButton: {
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
  },

});