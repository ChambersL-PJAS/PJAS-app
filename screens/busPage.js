import * as React from 'react';
import {
  Alert,
  Button,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


// FILE IMPORTS
const config = require('../config');


// STYLES IMPORTS
const styles = require('../style');



// SCREEN
const BusScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.normTextSize}>
            PDF embed of bus map here.
          </Text>
        </View>
      </ScrollView>
    );
}

export default BusScreen;