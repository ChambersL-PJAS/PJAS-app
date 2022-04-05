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
import { SvgXml } from 'react-native-svg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


// FILE IMPORTS
const config = require('./config');
const logo = require("./assets/images/logo.png");

// STYLES IMPORTS
const styles = require('./style');

// PAGE IMPORTS
import homePage from './screens/homePage';
import aboutPage from './screens/aboutPage';
import privacyPolicyPage from './screens/privacyPolicy';
import schedulePage from './screens/schedulePage';
import bookletPage from './screens/bookletPage';
import helpPage from './screens/helpPage';
import busPage from './screens/busPage';
import mapPage from './screens/mapPage';




// DRAWER
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions = {{
          overlayColor: config.pjasBlue75percent,
          itemStyle: {marginVertical: 5},
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: config.pjasBlue,
          drawerActiveBackgroundColor: config.pjasLightBlue,
          swipeEdgeWidth: 500,
        }}
        initialRouteName = "Home"
      >
        <Drawer.Screen
          name = "Home"
          component = {homePage}
          options = {{
            drawerLabel: 'Home',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'home-outline' : 'home' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
        <Drawer.Screen
          name = "About This App"
          component = {aboutPage}
          options = {{
            drawerLabel: 'About This App',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'information-circle-outline' : 'information-circle' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
        <Drawer.Screen
          name = "Privacy Policy"
          component = {privacyPolicyPage}
          options = {{
            drawerLabel: 'Privacy Policy',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'push-outline' : 'document' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
        <Drawer.Screen
          name = "Schedule"
          component = {schedulePage}
          options = {{
            drawerLabel: 'Schedule',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'calendar-outline' : 'calendar' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
        <Drawer.Screen
          name = "Booklet"
          component = {bookletPage}
          options = {{
            drawerLabel: 'Booklet',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'book-outline' : 'book' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
        <Drawer.Screen
          name = "Buses"
          component = {busPage}
          options = {{
            drawerLabel: 'Buses',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'bus-outline' : 'bus' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
        <Drawer.Screen
          name = "Campus Map"
          component = {mapPage}
          options = {{
            drawerLabel: 'Campus Map',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'map-outline' : 'map' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />



        <Drawer.Screen
          name = "Get Help"
          component = {helpPage}
          options = {{
            drawerLabel: 'Get Help',
            drawerIcon: (({focused}) => <Icon name = { focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses' } size = {24} color = { focused ? config.defaultBkgColor : config.pjasBlue } />)
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}