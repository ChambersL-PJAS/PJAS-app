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
const PMUnitListScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.normTextSize}>
            PDF embed of PM unit list here.
          </Text>
        </View>
      </ScrollView>
    );
}

export default PMUnitListScreen;