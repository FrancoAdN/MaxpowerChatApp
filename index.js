
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';


messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }

    return <App />;
}

AppRegistry.registerComponent('main', () => HeadlessCheck);
//registerRootComponent(App);

