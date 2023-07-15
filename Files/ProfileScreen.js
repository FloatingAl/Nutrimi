import React, { Component } from 'react'
import { Animated, AppRegistry, StyleSheet, View, TouchableOpacity, Image, Alert} from 'react-native';
import MenuButton from '../Files/MenuButton'
import {Text, Input, Card, Button} from 'react-native-elements'



export class ProfileScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      zipcode: ""

    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <MenuButton navigation = {this.props.navigation}/>
            <View>
              <Image
              style={styles.img}
              source={require('../img/jon.jpg')}></Image>
            </View>
            <Card title="Profile Summary"
            containerStyle={styles.card}
            >
            <Text style={styles.cardtext}>Name: Jon Snow</Text>
            <Text style={styles.cardtext}>From: Winterfell</Text>
            <Text style={styles.cardtext}>Likes: The Living</Text>
            <Text style={styles.cardtext}>Hates: The NightKing</Text>
            </Card>
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

  img: {
    width: 200,
    height: 200,
    borderRadius: 200/2,

  },
  cardtext: {
    fontSize: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',


  },
  card: { 
    marginBottom: 30,
  }
});

export default ProfileScreen;