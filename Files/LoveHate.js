import React, { Component } from 'react'
import { Animated, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import MenuButton from '../Files/MenuButton'

export class LoveHate extends Component {
  render() {
    return (
        <View>
            <MenuButton navigation = {this.props.navigation}/>
        </View>
    )
  }
}

export default LoveHate;