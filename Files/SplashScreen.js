import React, { Component } from 'react'
import { Animated, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import MenuButton from '../Files/MenuButton'

export class SplashScreen extends Component {

    componentDidMount = () => {
        setTimeout(()=> {
            this.props.navigation.navigate('Login')
        },4000)
    }
  render() {
    return (
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../img/logo.png')}></Image>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3A4042',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonContainer:{
      width: 300,
      height: 300,
      borderRadius: 300/2,
      backgroundColor: 'red',
      margin: 20,
      justifyContent: 'center', 
      alignItems: 'center'
    },
  
    button: {
      width: 300,
      height: 300,
      borderRadius: 300/2,
      backgroundColor: 'red',
      margin: 20,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    img: {
      width: 400,
      height: 400,
  
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
  });

export default SplashScreen;

