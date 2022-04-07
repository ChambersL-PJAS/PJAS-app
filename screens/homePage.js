import * as React from 'react';
import {
  Alert,
  Button,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// FILE IMPORTS
const config = require('../config');
const logo = require('../assets/images/logo.png');
const FBicon = require('../assets/socialicons/facebook.png');
const TWicon = require('../assets/socialicons/twitter.png');
const YTicon = require('../assets/socialicons/youtube.png');

// STYLES IMPORTS
const styles = require('../style');






// SCREEN
const HomeScreen = ({navigation}) => {
    return (
      <ScrollView>
        <View style = {styles.centeredContainer}>
            
          {/* LOGO */}
          <Image source = {logo} style = {styles.mainPageLogo}  fadeDuration = {config.fadeDuration} /> 
          
          {/* WELCOME MESSAGE */}
          <Text style = {styles.homeTitle}>
            Welcome to the {config.stateMeetYear} PJAS State Meeting
          </Text>
    
    
          {/* LOCATION AND DATES */}
          <Text style = {styles.homeLocation}>
            {config.stateMeetLocation}
          </Text>
          <Text style = {styles.homeEventDate}>
            May {config.stateMeetStart}–{config.stateMeetEnd}, {config.stateMeetYear}
          </Text>
    
          {/* HAPPENING NOW */}
          <Text style = {styles.homeLocation}>
              Happening now:
            </Text>
            <Text style = {styles.homeEventDate}>
              Event Title and Event Title
            </Text>


          {/* SOCIAL MEDIA ICONS */}
          <Text style = {styles.homeLocation}>
            Follow PJAS online!
          </Text>
          <View style = {styles.socialsFlexbox}>
            
            {/* FACEBOOK */}
            <View style = {styles.socialFlexItem}>
              <TouchableOpacity
                onPress={
                  () => Linking.canOpenURL('https://www.facebook.com/pjasorg/')
                  .then((supported) => {
                    if (!supported) {
                      console.log("Unable to open PJAS Facebook link: https://www.facebook.com/pjasorg/");
                    } else {
                      return Linking.openURL('https://www.facebook.com/pjasorg/');
                    }
                  })
                  .catch((err) => console.error('An error occurred', err))
                }>
                <Image style = {styles.socialIcon} source = {FBicon} fadeDuration = {config.fadeDuration} />
              </TouchableOpacity>
            </View>

            {/* TWITTER */}
            <View style = {styles.socialFlexItem}>
              <TouchableOpacity
                onPress={
                  () => Linking.canOpenURL('https://twitter.com/PJASorg/')
                  .then((supported) => {
                    if (!supported) {
                      console.log("Unable to open PJAS Twitter link: https://twitter.com/PJASorg/");
                    } else {
                      return Linking.openURL('https://twitter.com/PJASorg/');
                    }
                  })
                  .catch((err) => console.error('An error occurred', err))
                }>
                <Image style = {styles.socialIcon} source = {TWicon} fadeDuration = {config.fadeDuration} />
              </TouchableOpacity>
            </View>

            {/* YOUTUBE */}
            <View style = {styles.socialFlexItem}>
              <TouchableOpacity
                onPress={
                  () => Linking.canOpenURL('https://www.youtube.com/channel/UCKIIk7V4Ap7GsF-ALgTanwQ/')
                  .then((supported) => {
                    if (!supported) {
                      console.log("Unable to open PJAS YouTube link: https://www.youtube.com/channel/UCKIIk7V4Ap7GsF-ALgTanwQ/");
                    } else {
                      return Linking.openURL('https://www.youtube.com/channel/UCKIIk7V4Ap7GsF-ALgTanwQ/');
                    }
                  })
                  .catch((err) => console.error('An error occurred', err))
                }>
                <Image style = {styles.socialIcon} source = {YTicon} fadeDuration = {config.fadeDuration} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style = {{color: config.pjasBlue, fontStyle: 'italic', fontSize: config.normTextSize, marginHorizontal: 15, textAlign: 'center', }}>
              Share your photos of the State Meeting with us using <Text style = {{fontWeight: 'bold'}}>#PJASstates2022</Text>
            </Text>
    
          {/* Status Bar */}
          <StatusBar style = "auto" />
        </View>
      </ScrollView>
    );
}

export default HomeScreen;