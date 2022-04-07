import * as React from 'react';
import { Component } from 'react';
import {
  Alert,
  Button,
  Image,
  Linking,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Constants from 'expo-constants';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion'
import * as Animatable from 'react-native-animatable';


// FILE IMPORTS
const config = require('../config');
const awards = require('../awardDescriptors')


// STYLES IMPORTS
const styles = require('../style');



// // SCREEN
// const AwardsScholarshipsScreen = () => {
//     return (
//       <ScrollView>
//         <View style = {styles.container}>
//           <Text style = {styles.normTextSize}>
//             These awards are given at the Special Awards Ceremony on Monday evening. Tap on an award or scholarship to learn more about it.
//           </Text>
//           <Text style={styles.h2}>Special Awards</Text>
//             <Text style={styles.defaultText}>Students are eligible for these awards if they receive a First Award for their presentation.</Text>




//             <Text style={styles.defaultText}>PJAS Directors Awards – Junior High</Text>
//             <Text style={styles.defaultText}>PJAS Directors Awards – Senior High</Text>
//             <Text style={styles.defaultText}>Zappa Physics/Mathematics Awards – Junior High</Text>
//             <Text style={styles.defaultText}>Zappa Physics/Mathematics Awards – Senior High</Text>
//             <Text style={styles.defaultText}>Karl F. Oerlein Awards – Junior High</Text>
//             <Text style={styles.defaultText}>Karl F. Oerlein Awards – Senior High</Text>
//           <Text style={styles.h2}>Scholarships</Text>
//         </View>
//       </ScrollView>
//     );
// }

// export default AwardsScholarshipsScreen;



const CONTENT_Awards = [
  {
    title: 'PJAS Directors Awards – Junior High',
    content: awards.directorsjr,
  },{
    title: 'PJAS Directors Awards – Senior High',
    content: awards.directorssr,
  },{
    title: 'D.E. Zappa Physics/Mathematics Awards – Junior High',
    content: awards.zappajr,
  },{
    title: 'D.E. Zappa Physics/Mathematics Awards – Senior High',
    content: awards.zappasr,
  },{
    title: 'Karl F. Oerlein Awards – Junior High',
    content: awards.oerleinjr,
  },{
    title: 'Karl F. Oerlein Awards – Senior High',
    content: awards.oerleinsr,
  },{
    title: 'PA Science Talent Search – 11th Grade',
    content: awards.PSTSjr,
  },{
    title: 'PA Science Talent Search – 12th Grade',
    content: awards.PSTSsr,
  },{
    title: 'Ed Owens Memorial Award',
    content: awards.owensMem,
  },{
    title: 'PAESTA Earth Science Award',
    content: awards.paesta,
  },
];


export default class App extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>

          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>

          
        </ScrollView>
      </View>
    );
  }
}

// FUNCTION TO CREATE INDIVIDUAL COLLAPSIBLE ENTRIES
function award(name, description) {

}

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