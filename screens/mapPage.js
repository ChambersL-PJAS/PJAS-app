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
const MapScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.normTextSize}>
            Map of PSU's campus here (or offline Google Maps embed)
          </Text>
        </View>
      </ScrollView>
    );
}

export default MapScreen;