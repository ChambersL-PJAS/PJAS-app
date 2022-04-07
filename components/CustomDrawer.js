import React from 'react';
import {
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/Ionicons';
import config, { defaultBkgColor, pjasBlue } from '../config';
const SocialsSplashBkg = require('../assets/images/SocialsSplashBkg.png')
var pjson = require('../package.json');

// STYLES
const styles = require('../style');

const CustomDrawer = (props) => {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: '#ffff',
        }}>
            {/* DRAWER TOP IMAGE */}
            <View style = {{
                backgroundColor: pjasBlue,
                height: 150,
            }}>
                <ImageBackground
                    source = {SocialsSplashBkg}
                    style = {{width: '100%', height: '100%'}}
                    fadeDuration = {config.fadeDuration}
                /> 
            </View>

            

            {/* DRAWER MAIN CONTENTS LIST */}
            <DrawerContentScrollView
                contentContainerStyle={{
                    paddingTop: 5,
                 }}
                  {...props}>
                <DrawerItemList {...props}>

                </DrawerItemList>
            </DrawerContentScrollView>
            
            {/* DRAWER FOOTER */}
            <View style = {{
                backgroundColor: defaultBkgColor,
                height: 50,
                paddingBottom: 5,
            }}>
                <View style = {styles.flexbox}>
                    <View style = {styles.flexItemLeft}>
                        <Text style = {styles.footerText}>
                            v{pjson.version}
                        </Text>
                    </View>
                    <View style = {styles.flexItemRight}>
                        <Text style = {styles.footerText}>
                            © 2022 PJAS
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomDrawer