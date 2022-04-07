import * as React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
const resources = require('../assets/documents/2019 - State Booklet.pdf')



// FILE IMPORTS
const config = require('../config');


// STYLES IMPORTS
const styles = require('../style');




// SCREEN
const BookletScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.normTextSize}>
            PDF embed of booklet here.
          </Text>
        </View>
      </ScrollView>
    );
}

export default BookletScreen;