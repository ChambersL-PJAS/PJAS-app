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
const DiningMenuScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.h2}>
            Sunday
          </Text>
          <Text style = {styles.normTextSize}>
            Food!
          </Text>
          <Text style = {styles.h2}>
            Monday
          </Text>
          <Text style = {styles.normTextSize}>
            Food!
          </Text>
          <Text style = {styles.h2}>
            Tuesday
          </Text>
          <Text style = {styles.normTextSize}>
            Food!
          </Text>
        </View>
      </ScrollView>
    );
}

export default DiningMenuScreen;