import * as React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// FILE IMPORTS
const config = require('./config')
const logo = require("./assets/images/logo.png")


// HOME SCREEN
function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
        
      {/* Logo */}
        <Image source = {logo} style = {styles.mainPageLogo}  fadeDuration = {config.fadeDuration} /> 
      {/* Welcome Message */}
        <Text style = {styles.homeTitle}>
          Welcome to the {config.stateMeetYear} PJAS State Meeting app.
        </Text>


      {/* Stylized Text */}
        <Text style = {styles.h1}>
          H1 Text
        </Text>
        <Text style = {styles.h2}>
          H2 Text
        </Text>
        <Text style = {styles.h3}>
          H3 Text
        </Text>
        <Text style = {styles.defaultText}>
          Normal size text
        </Text>

        {/* ABOUT PAGE BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate('About')}
          style ={styles.button}>
            <Text style = {styles.buttonText}>
              About This App
            </Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress = {() =>
            Alert.alert(`Popup!`, `This is a test alert!`, [
              { text: "Yes" },
              { text: "No" },
            ])
          }
          style ={styles.button}>
            <Text style = {styles.buttonText}>
              Test: alert popup with buttons inside
            </Text>
        </TouchableOpacity>


        {/* Status Bar */}
        <StatusBar style = "auto" />
      </View>
  );
}


// SECOND SCREEN
function NotificationsScreen({ navigation }) {
  return (
    <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress = {() => navigation.goBack()} title = "Go back home" />
    </View>
  );
}




// DRAWER
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions = {{
          overlayColor: config.pjasBlue75percent,
          itemStyle: {marginVertical: 5},
        }}
        initialRouteName = "Home"
      >
        <Drawer.Screen name = "Home" component = {HomeScreen} />
        <Drawer.Screen name = "Notifications" component = {NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}








/****************************************/
/* STYLES                               */
/****************************************/
const styles = StyleSheet.create({
  /****************************************/
  /* CONTAINERS                           */
  /****************************************/
  container: {
    flex: 1,
    backgroundColor: config.defaultBkgColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  /****************************************/
  /* BUTTONS                              */
  /****************************************/
  button: {
    backgroundColor: config.pjasBlue,
    padding: config.buttonPadding,
    borderRadius: config.buttonBorderRadius,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: config.normTextSize,
    color: "white",
  },
  /****************************************/
  /* IMAGES                               */
  /****************************************/
  mainPageLogo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  /****************************************/
  /* TEXT / FONTS                         */
  /****************************************/
  defaultText: {
    color: config.pjasBlue,
    fontSize: config.normTextSize,
    marginHorizontal: 15
  },
  homeTitle: {
    textAlignVertical: "center",
    textAlign: "center",
    color: config.pjasBlue,
    fontSize: config.h1TextSize,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 50,
  },

    /****************************************/
    /* HEADINGS                             */
    /****************************************/
    h1: {
      color: config.pjasBlue,
      fontSize: config.h1TextSize,
      fontWeight: 'bold',
      marginHorizontal: 15
    },
    h2: {
      color: config.pjasBlue,
      fontSize: config.h2TextSize,
      fontWeight: 'bold',
      marginHorizontal: 15
    },
    h3: {
      color: config.pjasBlue,
      fontSize: config.h3TextSize,
      fontWeight: 'bold',
      marginHorizontal: 15
    },

});