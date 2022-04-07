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
const ScheduleScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.normTextSize}>
            I'm hoping to build a method where you can filter the schedule of events by region (instead of seeing all 12 region's meetings or awards ceremonies, you'd be able to select your region and you'd see that one).
          </Text>
          <Text style = {styles.h2}>
            Sunday
          </Text>
          <Text style = {styles.h2}>
            Monday
          </Text>
          <Text style = {styles.h2}>
            Tuesday
          </Text>
        </View>
      </ScrollView>
    );
}

export default ScheduleScreen;