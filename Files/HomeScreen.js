import React, { Component } from 'react'
import { Modal,Animated, AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Alert, RefreshControl} from 'react-native';
import MenuButton from '../Files/MenuButton'
import Api from '../Files/Api'

import { Button, Input } from 'react-native-elements'
import { NavigationEvents, ScrollView } from 'react-navigation';

const CONTENT = {
  "images": [
    require("../img/burger.png"),
    require("../img/fish.png"), 
    require("../img/pizza.png"),
    require("../img/subs.png"),
    require("../img/icecream.png"),
    require("../img/steak.png"),
    require("../img/tacos.png"),
    require("../img/sushi.png"),
    require("../img/ramen.png"),
    require("../img/salad.png"),

  ],
  "name": [
    "Burger",
    "Fish",
    "Pizza",
    "Subs",
    "Icecream",
    "Steak",
    "Tacos",
    "Sushies",
    "Noodles",
    "Salad",
  ]

  }
   
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  

class MyButton extends React.Component {
    constructor(props){
      super(props)

      this.state = {
        name: '',
      }
  
    }
    render() {
      return (
      <Animated.View 
        style = {[styles.buttonContainer,
        this.props.ani.getLayout()]}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.props.mButton}>
          <Text style = {{fontSize: 30}}> 
            Test your luck 
          </Text>
        </TouchableOpacity>
      </Animated.View>
      );
    } 
  } 

export class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      onPress: false,
      src : require("../img/black.jpg"),
      name: "",
      zipcode: "01854",
      refreshing: false,
    };
    this.moveAnimation = new Animated.ValueXY({x: 0,y: 0})
  }

  moveButton = () =>{
    Animated.spring(this.moveAnimation, {
      toValue: {x: 0, y: -50 },
    }).start()
    this.chooseImage();
  }

  _onRefresh = () => {
    this.setState({
    onPress:false});
    this.moveAnimation = new Animated.ValueXY({x: 0,y: 0})

  }

  chooseImage = () =>{
    let newSrc = require("../img/black.jpg");
      randomInt = getRandomInt(10)
      newName = CONTENT.name[randomInt]
      newSrc = CONTENT.images[randomInt]
    this.setState({
      onPress : true,
      src : newSrc,
      name: newName
    });
    console.log(this.state.onPress);
  }

  render() {

    const {navigate} = this.props.navigation;
    return (
    <View style = {styles.container}>
      <MenuButton navigation = {this.props.navigation}/>
      <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }>
      <View style={styles.container}>
        <View style={styles.titleView}>
          {!this.state.onPress && <Text style = {styles.text}>
            Please select your current location:
          </Text>}
          {!this.state.onPress && <Input
            containerStyle={{backgroundColor:"white",width:200}}
            placeholder="Address/Zipcode"
            onChangeText = {(zipcode) => this.setState({zipcode})}
          />}
        </View>
        <MyButton ani = {this.moveAnimation}
                  mButton = {this.moveButton} 
                  chooseImage={this.chooseImage}>
        </MyButton>
        {console.log(this.state.name)}
        {this.state.onPress && <Text style = {{fontSize: 30, marginBottom:10}}>Why not try: {this.state.name}</Text>}
        {this.state.onPress && <Image style = {styles.img} source = {this.state.src}/>}
        {this.state.onPress && <Button 
          title = "Find a Locations" 
          containerStyle= {{ marginTop: 10}}
          onPress={() => navigate('Api', {meal: this.state.name,
                                          address: this.state.zipcode})}
        >
        </Button>}
      </View>
      </ScrollView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3',
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
      width: 200,
      height: 200,
  
    },
    titleView: {
      justifyContent: 'center', 
      alignItems: 'center'
    },
    text: {
      fontSize: 20,
      marginBottom: 10
    }
  });

export default HomeScreen
