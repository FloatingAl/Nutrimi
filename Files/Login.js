import React, { Component } from 'react'
import { Animated, AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import {createSwitchNavigator } from 'react-navigation'
import { Input, Card , Button} from 'react-native-elements'
//import readFromJSONFile from './JSONfunctions'

export class Login extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: " ",
      password: " "
    }
  }
    _showMore = ()=> {
      var filename = this.state.username + ".json";
      this.props.navigation.navigate('SecondScreen')
    }
  render() {
    return (
        <View style = {styles.container}>
          <Card title = "Login Screen" 
          containerStyle={{width: 350, height: 350, marginBottom: 30}}>
          <Input
              placeholder = "Username"
              value = "Test@gmail.com"
              onChangeText = {(username) => this.setState({username})}
              containerStyle={styles.input}
          />
          
          <Input
              placeholder = "Password"
              value = "admin"
              onChangeText = {(password) => this.setState({password})}
              secureTextEntry={true}
              containerStyle={styles.input}
          />

          <Button
            title="Login"
            onPress = {this._showMore}
            containerStyle={styles.input}
          />
          
          <Button
            title="Sign Up"
            containerStyle={styles.inputButton}
            onPress = {() => this.props.navigation.navigate("Signup")}
          />
          </Card>
        </View>
    )
  }
}

export default Login;

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
      marginBottom: 20,
    },
    title: {
      fontSize: 40,
      marginBottom: 20,
    },
  
  });