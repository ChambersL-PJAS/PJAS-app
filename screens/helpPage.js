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
import Icon from 'react-native-vector-icons/Ionicons';

// FILE IMPORTS
const config = require('../config');


// STYLES IMPORTS
const styles = require('../style');



// SCREEN
const HelpScreen = () => {
  return (
    <ScrollView>
      <View style = {styles.container}>
        <Text style = {styles.normTextSize}>
          Important or helpful resources, their locations, and contact information.
        </Text>

        {/* INFO DESK */}
        <Text style = {styles.h2}>
          PJAS Information Desk
        </Text>
        <Text style = {styles.defaultText}>
          Location: {config.infodeskLocation}
          {'\n'}
          Phone:&nbsp;{phoneNumberFormat('PJAS PJAS Information Desk', config.infodeskPhone)}
        </Text>

        {/* NURSE */}
        <Text style = {styles.h2}>
            PJAS Nurse
          </Text>
          <Text style = {styles.defaultText}>
            <Text style = {{fontStyle: 'italic'}}>On duty 24 hours a day</Text>
            {'\n'}
            Location: {config.nurseLocation}
            {'\n'}
            Phone:&nbsp;{phoneNumberFormat('PJAS Nurse', config.nursePhone)}
        </Text>








      </View>
    </ScrollView>
  );
}

export default HelpScreen;


// FUNCTION TO HANDLE PHONE DISPLAY, POPUP, AND DIALING
function phoneNumberFormat(name, phone) {
  return (
    <Text onPress = {() =>
      Alert.alert(`Making a Call`,
        `You're about to call the ${name} at ${phone}.`,
        [
          { text: "CALL", onPress: () => Linking.openURL(`tel:+1${phone}`) },
          { text: "   CANCEL" },
        ], {
            cancelable: true,
          })
    }>
      <Text style={{color: 'blue'}}>
        {phone}
      </Text>
    </Text>
  )
}