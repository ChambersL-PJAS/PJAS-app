import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Dialog from 'react-native-dialog';

import logo from './assets/images/logo.png';



/****************************************/
/* VARIABLES                            */
/****************************************/
  /* TEXT */
  var stateMeetYear = '2022';

  /* COLORS */
  var pjasBlue = '#122937';
  var pjasLightBlue = '#2d7096';
  var defaultBkgColor = '#eee';

  /* FONT SIZES */
  var normTextSize = 16;
  var h1TextSize = 27;
  var h2TextSize = 23;
  var h3TextSize = 19;

  /* BUTTONS */
  var buttonPadding = 20;
  var buttonBorderRadius = 5;
 
  /* EFFECTS */
  var fadeDuration = 500;





export default function App() {

  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = ()=> {
    SetSubmitted(!submitted);
  }


  // DIALOGUE SETTINGS
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleReturn = () => {
    setVisible(false);
  };




  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
        <Image source = {logo} style = {styles.mainPageLogo}  fadeDuration = {fadeDuration} /> 
      {/* Welcome Message */}
        <Text style = {styles.homeTitle}>
          Welcome to the {stateMeetYear} PJAS State Meeting
        </Text>
      {/* Location */}
        <Text style = {styles.locationText}>
          Penn State University Park
        </Text>
      {/* Location */}
        <Text style = {styles.datesText}>
          May 15-17, 2022
        </Text>

      {/* Location */}
      <Text style = {styles.defaultText}>
          Swipe left or use the menu icon on the top-left to navigate and open resources.
        </Text>



        {/* ABOUT PAGE BUTTON */}
        <View>
            <Pressable
              onPress = {onPressHandler}
              hitSlop = {{ top: 4, bottom: 4, right: 4, left: 4 }}
              android_ripple = {{color: {pjasLightBlue}}}
              style = {({ pressed }) => [
                { backgroundColor: pressed ? pjasLightBlue : pjasBlue },
              styles.button
              ]}
            >
                <Text style = {styles.buttonText}>
                  About This App
                </Text>
            </Pressable>
        </View>
        



        <View>
          <Pressable
            onPress = {() =>
              Alert.alert(`Popup!`, `This is a test alert!`, [
                { text: "Yes" },
                { text: "No" },
              ])
            }
            hitSlop = {{ top: 4, bottom: 4, right: 4, left: 4 }}
            android_ripple = {{color: {pjasLightBlue}}}
            style = {({ pressed }) => [
              { backgroundColor: pressed ? pjasLightBlue : pjasBlue },
            styles.button
            ]}>
              <Text style = {styles.buttonText}>
                Test: alert popup with buttons inside
              </Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            hitSlop = {{ top: 4, bottom: 4, right: 4, left: 4 }}
            android_ripple = {{color: {pjasLightBlue}}}
            onPress = {showDialog}
            />
              <Dialog.Container visible={true}>
                <Dialog.Title>About This App:</Dialog.Title>
                <Dialog.Description>
                  Created by Liam Chambers (PJAS Website & Digital Presence) and built with React Native. Contact him via email with the button below or open the GitHub repository to view the code.`
                </Dialog.Description>
                <Dialog.Button label="Return" onPress={handleReturn} />
                <Dialog.Button label="Contact" onPress={() => Linking.openURL('mailto:chambersl@pjas.org?subject=PJAS App Inquiry')} />
                <Dialog.Button label="View Code" onPress={() => Linking.openURL('https://github.com/ChambersL-PJAS/PJAS-app')} />
              </Dialog.Container>
            <Text style = {styles.defaultText}>
              About This App
            </Text>
        </View>


        {/* Status Bar */}
        <StatusBar style = "auto" />

    </SafeAreaView>
  );
}








/****************************************/
/* STYLES                               */
/****************************************/
const styles = StyleSheet.create({
  /****************************************/
  /* CONTAINERS                           */
  /****************************************/
  container: {
    flex: 1,
    backgroundColor: defaultBkgColor,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  /****************************************/
  /* BUTTONS                              */
  /****************************************/
  button: {
    padding: buttonPadding,
    borderRadius: buttonBorderRadius,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: normTextSize,
    color: "white",
  },
  /****************************************/
  /* IMAGES                               */
  /****************************************/
  mainPageLogo: {
    width: 150,
    height: 150,
    marginTop: 75,
    marginBottom: 50,
  },
  /****************************************/
  /* TEXT / FONTS                         */
  /****************************************/
  defaultText: {
    color: pjasBlue,
    fontSize: normTextSize,
    marginHorizontal: 15
  },
  homeTitle: {
    textAlignVertical: "center",
    textAlign: "center",
    color: pjasBlue,
    fontSize: h1TextSize,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 30,
  },
  locationText: {
    textAlignVertical: "center",
    textAlign: "center",
    color: pjasBlue,
    fontSize: h3TextSize,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  datesText: {
    textAlignVertical: "center",
    textAlign: "center",
    color: pjasBlue,
    fontSize: h3TextSize,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 50,
  },

    /****************************************/
    /* HEADINGS                             */
    /****************************************/
    h1: {
      color: pjasBlue,
      fontSize: h1TextSize,
      fontWeight: 'bold',
      marginHorizontal: 15
    },
    h2: {
      color: pjasBlue,
      fontSize: h2TextSize,
      fontWeight: 'bold',
      marginHorizontal: 15
    },
    h3: {
      color: pjasBlue,
      fontSize: h3TextSize,
      fontWeight: 'bold',
      marginHorizontal: 15
    },







});