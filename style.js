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
    flexbox: {
        flex: 1,
        flexDirection: 'row',
    },
    flexItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexItemLeft: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexItemRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    socialsFlexbox: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
    },
    socialFlexItem: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
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
    socialIcon: {
        width: 50,
        height: 50,
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
        marginBottom: 25,
    },
    homeLocation: {
        textAlignVertical: "center",
        textAlign: "center",
        color: config.pjasBlue,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5,
    },
    homeEventDate: {
        textAlignVertical: "center",
        textAlign: "center",
        color: config.pjasBlue,
        fontSize: 19,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 50,
    },
    socialsLabel: {
        textAlignVertical: "center",
        textAlign: "center",
        color: config.pjasBlue,
        fontSize: 10,
        fontStyle: 'italic',
    },
    footerText: {
        color: config.mediumGrey,
        fontSize: config.tinyTextSize,
        marginHorizontal: 15,
        marginBottom: 2,
    },
    footerTextLinks: {
        color: config.mediumGrey,
        fontSize: config.smallTextSize,
        marginHorizontal: 15,
        marginBottom: 2,
    },

    /****************************************/
    /* HEADINGS                             */
    /****************************************/
    h1: {
        color: config.pjasBlue,
        fontSize: config.h1TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 35,
    },
    h2: {
        color: config.pjasBlue,
        fontSize: config.h2TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 25,
    },
    h3: {
        color: config.pjasBlue,
        fontSize: config.h3TextSize,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginTop: 20,
    },









    title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    },
    header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    },
    headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    },
    content: {
    padding: 20,
    backgroundColor: '#fff',
    },
    active: {
    backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    },
    selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
    },
    activeSelector: {
    fontWeight: 'bold',
    },
    selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    },
    multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
    },
    multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
    },
});

