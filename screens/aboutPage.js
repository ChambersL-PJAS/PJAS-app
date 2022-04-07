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
const liamImage = require("../assets/images/Liam.jpg");
var pjson = require('../package.json');


// STYLES IMPORTS
const styles = require('../style');



// SCREEN
const AboutScreen = () => {
  return (
    <ScrollView>
      <View style = {styles.container}>
        <View style = {styles.aboutFlexbox}>
          <View style = {{maxWidth: '60%'}}>
            <Text style = {styles.h3}>
              Developer
            </Text>
            <Text style = {styles.defaultText}>
              Liam Chambers,
            </Text>
            <Text style = {styles.defaultText}>
              <Text style = {{fontStyle:'italic'}}>
                PJAS Website & Digital Presence
              </Text>
            </Text>
            <Text style = {styles.defaultTextWithSmGap}>
              Email:&nbsp;
              <Text style={{color: 'blue', paddingLeft:50}} onPress={() => Linking.openURL('mailto:chambersl@pjas.org?subject=PJAS App Inquiry')}>
                Contact Liam <Icon name = 'open-outline' size = {16} color = {config.pjasBlue} />
              </Text>
            </Text>
            <Text style = {styles.defaultText}>
              <Text style = {{fontStyle:'italic'}}>
                chambersl@pjas.org
              </Text>
            </Text>
          </View>
          <View style = {styles.container}>
            <Image source = {liamImage} style = {styles.liamImage}  fadeDuration = {config.fadeDuration} /> 
          </View>
        </View>
        

        <Text style = {styles.h3}>
          Details
        </Text>
        <Text style = {styles.defaultText}>
          <Text style = {{fontWeight: 'bold'}}>Version:</Text> {pjson.version}
        </Text>
        <Text style = {styles.defaultTextWithSmGap}>
          <Text style = {{fontWeight: 'bold'}}>Build Date:</Text> {pjson.versionDate}
        </Text>
        <Text style = {styles.defaultTextWithSmGap}>
          <Text style = {{fontWeight: 'bold'}}>Framework:</Text> React Native (0.68.0)
        </Text>
        <Text style = {styles.defaultTextWithSmGap}>
        <Text style = {{fontWeight: 'bold'}}>Code:</Text>&nbsp;
          <Text style={{color: 'blue', paddingLeft:50}} onPress={() => Linking.openURL('https://github.com/ChambersL-PJAS/PJAS-app')}>
            View this app's GitHub repository <Icon name = 'open-outline' size = {16} color = {config.pjasBlue} />
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

export default AboutScreen;