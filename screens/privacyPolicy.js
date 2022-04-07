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
import { buttonPadding } from '../config';
import Icon from 'react-native-vector-icons/Ionicons';

// FILE IMPORTS
const config = require('../config');

// STYLES IMPORTS
const styles = require('../style');



// SCREEN
const PrivacyPolicyScreen = () => {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style = {styles.defaultText}>
            Last Updated: April 05, 2022
          </Text>
          <Text style = {styles.defaultTextWithSmGap}>
            This app <Text style = {{fontWeight:'bold'}}>does not</Text> collect, store, or sell any personally identifiable information about you, your device, or any other details.{'\n'}{'\n'}
            This app contains links to these websites:
          </Text>
          <Text style = {styles.defaultText}>
            {'\u2022'} This application's GitHub repository {'\n'}
            {'\u2022'} PJAS social media accounts: {'\n'}
            {'\t'}{'\t'}{'\u2022'} Facebook {'\n'}
            {'\t'}{'\t'}{'\u2022'} Twitter (@PJASorg and @PJASInfoDesk) {'\n'}
            {'\t'}{'\t'}{'\u2022'} YouTube {'\n'}
          <Text style = {{fontStyle: 'italic', fontSize: 12}}>{'\n'}(Accessing these links require WiFi or a data connection which may incur charges.)</Text>
          </Text>
          <Text style = {styles.defaultTextWithGap}>
            Please reach out to the developer, Liam Chambers <Text style = {{fontStyle:'italic'}}>(PJAS Website & Digital Presence)</Text>, with any questions about this Privacy Policy.
            {'\n'}
            {'\n'}
            <Text style = {styles.defaultTextWithSmGap}>
            Email:&nbsp;
            <Text style={{color: 'blue', paddingLeft:50}} onPress={() => Linking.openURL('mailto:chambersl@pjas.org?subject=PJAS App Inquiry')}>
              Contact Liam <Icon name = 'open-outline' size = {16} color = {config.pjasBlue} />
            </Text>
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
}

export default PrivacyPolicyScreen;