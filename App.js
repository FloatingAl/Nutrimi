import React from 'react';
import { Platform, Animated, AppRegistry, Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Dimensions} from 'react-native';
import { createAppContainer, createDrawerNavigator, createSwitchNavigator, createStackNavigator} from 'react-navigation'
import HomeScreen from './Files/HomeScreen'
import ProfileScreen from './Files/ProfileScreen'
import Payment from './Files/Payment'
import LoveHate from './Files/LoveHate'
import FoodFilter from './Files/FoodFilter'
import Signup from './Files/Signup'
import Login from './Files/Login'
import Api from './Files/Api'
import SplashScreen from './Files/SplashScreen'
//import MenuButton from './Files/MenuButton'

const WIDTH = Dimensions.get('window').width;

export class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Drawer/>
      </View>
    );
  }
}

const Menu = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },

  Api: {
    screen: Api,
  }
})

const DrawerNavigator = createDrawerNavigator({

    Menu: {
      screen: Menu,
      navigationOptions: {
        title: 'Home  ',
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile  ',
      }
    },
    Payment: {
      screen: Payment,
      navigationOptions: {
        title: 'Payment  ',
      }
    },    
}, {
  initialRouteName: 'Menu'
});

const Auth = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  Login:{
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Signup:{
    screen: Signup, 
  },

});

const App = createSwitchNavigator({
  FirstScreen: Auth,
  SecondScreen: DrawerNavigator,
})

const Drawer = createAppContainer(App);

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

AppRegistry.registerComponent('Nutrami', () => Main)