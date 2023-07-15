import React, { Component } from 'react'
import { Animated, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert, TextInput} from 'react-native';
import MenuButton from '../Files/MenuButton'
import { Input, Card } from 'react-native-elements'

export class Payment extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            type: " ",
            focused: " ",
            cardnumber: " ",
            name: " ",
            expiry: " ", 
            cvc: " ",
        }

        console.log(this.state.cardnumber)
    }
  
  submit = () => {
      let collection = {}
      collection.cardnumber = this.state.cardnumber
      collection.expiry = this.state.expiry
      collection.name = this.state.name
      collection.cvc = this.state.cvc
      console.log(collection)
  }


  render() {
    return (
        <View style = {styles.container}>
            <MenuButton navigation = {this.props.navigation}/> 
            <View style = {styles.payment}>
                <Card title = "Payment"
                      containerStyle={{width: 300, height: 300, marginBottom: 30}}>
                    <Input
                        placeholder = "Card Number"
                        keyboardType="numeric"
                        onChangeText = {(cardnumber) => this.setState({cardnumber})}
                    />
                    
                    <Input
                        placeholder = "Expiration"
                        onChangeText = {(expiry) => this.setState({expiry})}
                    />
                    
                    <Input
                        placeholder = "Name"
                        onChangeText = {(name) => this.setState({name})}
                    />
 
                    <Input
                        keyboardType="numeric"
                        placeholder = "CVC"
                        onChangeText = {(cvc) => this.setState({cvc})}
                    />
                </Card>
                
                <Button
                styles = {{marginTop: 100}}
                onPress = {() => this.submit()}
                title="       Save       "
            />
            </View>
        </View>
    )
  }
}

export default Payment;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#D3D3D3",
    },
    payment: {
        //padding: 20,
        //paddingVertical: 20,
        //flex: 1,
        backgroundColor: "#D3D3D3",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 30,
        //height: 20,
        marginBottom: 30,

    },
    button: {
        marginTop: 20,
    },
    card: {
        height: 100,
        width: 100,
    }
});