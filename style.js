'use strict'
import { StyleSheet } from 'react-native';

// FILE IMPORTS
const config = require('./config');


module.exports = StyleSheet.create({
    /****************************************/
    /* CONTAINERS                           */
    /****************************************/
    centeredContainer: {
        flex: 1,
        backgroundColor: config.defaultBkgColor,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: config.defaultBkgColor,
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    aboutFlexbox: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 200,
    },
    /****************************************/
    /* BUTTONS                              */
    /****************************************/
    button: {
        backgroundColor: config.pjasLightBlue,
        padding: config.buttonPadding,
        borderRadius: config.buttonBorderRadius,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: config.normTextSize,
        color: "white",
    },
    /****************************************/
    /* IMAGES                               */
    /****************************************/
    mainPageLogo: {
        width: 150,
        height: 150,
        marginBottom: 30,
        marginTop: 15,
    },
    liamImage: {
        width: 125,
        height: 125,
        borderRadius: 35,
    },
    /****************************************/
    /* TEXT / FONTS                         */
    /****************************************/
    defaultText: {
        color: config.pjasBlue,
        fontSize: config.normTextSize,
        marginHorizontal: 15
    },
    defaultTextWithSmGap: {
        color: config.pjasBlue,
        fontSize: config.normTextSize,
        marginHorizontal: 15,
        marginTop: 15,
    },
    defaultTextWithGap: {
        color: config.pjasBlue,
        fontSize: config.normTextSize,
        marginHorizontal: 15,
        marginTop: 60,
    },
    homeTitle: {
        textAlignVertical: "center",
        textAlign: "center",
        color: config.pjasBlue,
        fontSize: config.h1TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 50,
    },
    homeLocation: {
        textAlignVertical: "center",
        textAlign: "center",
        color: config.pjasBlue,
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    homeEventDate: {
        textAlignVertical: "center",
        textAlign: "center",
        color: config.pjasBlue,
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 50,
    },

    /****************************************/
    /* HEADINGS                             */
    /****************************************/
    h1: {
        color: config.pjasBlue,
        fontSize: config.h1TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    h2: {
        color: config.pjasBlue,
        fontSize: config.h2TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
    h3: {
        color: config.pjasBlue,
        fontSize: config.h3TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15
    },
});

