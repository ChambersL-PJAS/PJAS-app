import * as React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// FILES
const config = require('./config');
const logo = require("./assets/images/logo.png");

// COMPONENTS
import CustomDrawer from './components/CustomDrawer'

// STYLES
const styles = require('./style');

// PAGES
import homePage from './screens/homePage';
import aboutPage from './screens/aboutPage';
import awardsScholarshipsPage from './screens/awardsScholarshipsPage';
import bookletPage from './screens/bookletPage';
import busPage from './screens/busPage';
import diningMenuPage from './screens/diningMenuPage';
import helpPage from './screens/helpPage';
import mapPage from './screens/mapPage';
import schedulePage from './screens/schedulePage';
import AMUnitList from './screens/AMUnitList'
import PMUnitList from './screens/PMUnitList'



// DRAWER
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      swipeEdgeWidth = {500}
      swipeMinDistance = {100}
      drawerContent = {(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={homePage}/>
      <Drawer.Screen name="Help & Info" component={helpPage}/>
      <Drawer.Screen name="Schedule" component={schedulePage}/>
      <Drawer.Screen name="AM Unit List" component={AMUnitList}/>
      <Drawer.Screen name="PM Unit List" component={PMUnitList}/>
      <Drawer.Screen name="Booklet" component={bookletPage}/>
      <Drawer.Screen name="Dining Menu" component={diningMenuPage}/>
      <Drawer.Screen name="Campus Map" component={mapPage}/>
      <Drawer.Screen name="Bus Route" component={busPage}/>
      <Drawer.Screen name="Awards & Scholarships" component={awardsScholarshipsPage}/>
      <Drawer.Screen name="About This App" component={aboutPage}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
export default App