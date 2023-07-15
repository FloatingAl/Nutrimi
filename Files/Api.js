import React, { Component } from 'react';
import { ScrollView, StyleSheet,Alert, View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import axios from 'axios';

const apikey = "oToW9DcEi0MK8_v2h-zy_ix6Rn12aPKCvKMGdItF1hfKu9qUtQwwTWppZfAHAwEOULuS9PMoescrdNFlaor_U6xCFErbqSbO3EgNqsZxoe71w7akib-Oj3SJzA-sXHYx"

export class Api extends Component {
  constructor(props){
    super(props)

    this.state = {
      test: {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':'Bearer ' + apikey},
        params: {
          term: this.props.navigation.state.params.meal,
          location: this.props.navigation.state.params.address,
          limit: 10
        }
      }, 
    }
  }

   componentDidMount = async() =>{
    axios.get('https://api.yelp.com/v3/businesses/search', this.state.test)
    .then((response) => {
      const { businesses } = response.data
      this.setState({dataSource: businesses});
    })
  }

  render(){
    return (
      <View style={styles.container}>
      <ScrollView style = {styles.scroll}>
        {!!this.state.dataSource 
         ? Array(10).fill(0).map( (_, i) => 
          <TouchableOpacity
          key = {i}
          style= {styles.touchcontainer}
          onPress={()=> Linking.openURL(this.state.dataSource[i].url)}
          >
          <Image source={{uri: this.state.dataSource[i].image_url}} style={styles.image}
          />
          <View style={styles.textcontainer}>
            <Text style={{fontSize:20}}>{this.state.dataSource[i].name}</Text>
            <Text style={{marginLeft:10, marginRight: 10}}>{this.state.dataSource[i].location.display_address}</Text>
          <View style={styles.price}>
            <Text style={{marginRight: 15}}>Price: {this.state.dataSource[i].price == null ? "$": this.state.dataSource[i].price }</Text>
            {(this.state.dataSource[i].is_closed) == true ? <Text style={{color:"red"}}>Closed</Text> : <Text style={{color:"green"}}>Open</Text> }
          </View>
          <View style={styles.trans}>
            <Text style={{marginRight: 15}}>Pickup? {(this.state.dataSource[i].transactions[0]) == "pickup" ? <Text style={{color:"green"}}>Yes</Text> : <Text style={{color:"red"}}>No</Text> } </Text>
            <Text>Delivery? {(this.state.dataSource[i].transactions[1]) == "delivery" ? <Text style={{color:"green"}}>Yes</Text> : <Text style={{color:"red"}}>No</Text> } </Text>
          </View>
          </View>
          </TouchableOpacity>)
          : null
        }
      </ScrollView>
      </View>
    );
  }
}



export default Api

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    flexDirection: 'column',
  },
  touchcontainer: {
    flex: 1,
    flexDirection:'row',
    margin: 10,
    borderRadius: 100/2,
    backgroundColor: "white"
  }, 
  image: {
    height: 140,
    width: 140,
    borderRadius: 140/2,
    padding: 50,
    margin:10
    
  },
  textcontainer:{
    flex: 1,
    alignItems: 'center', // Vertial
    justifyContent: 'center', // Horizontal
  },
  scroll:{
    flex:1
  },
  price: {
    flexDirection:"row"
  },
  trans: {
    flexDirection:"row",
    marginLeft: 5
  }

});