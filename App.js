
import React, { useEffect, useContext } from 'react'
import { StyleSheet, AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { fcmService } from './FCMService'
import { localNotificationService } from './LocalNotificationService'
import ChatProv from './src/components/_useChat'
import Main from './Main'
import axios from 'axios'

export default function App() {

  useEffect(() => {
    fcmService.registerAppWithFCM()
    fcmService.register(onRegister, onNotification, onOpenNotification)
    localNotificationService.configure(onOpenNotification)

    function onRegister(token) {
      //console.log("[App] onRegister: ", token)
      const HAS_LAUNCHED = "hasLaunched"
      AsyncStorage.getItem(HAS_LAUNCHED).then(value => {
        if (value === null) {
          const json = { token }
          axios.post("http://api.maxpower-ar.com/device", json).then(() => { }).catch((err) => { })
          console.log("first launch")
          AsyncStorage.setItem(HAS_LAUNCHED, "true")
        }
      })
    }

    function onNotification(notify) {
      const options = {
        soundName: 'default',
        playSound: true //,
        // largeIcon: 'ic_launcher', // add icon large for Android (Link: app/src/main/mipmap)
        // smallIcon: 'ic_launcher' // add icon small for Android (Link: app/src/main/mipmap)
      }
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options
      )
    }

    function onOpenNotification(notify) {
      // console.log("[App] onOpenNotification: ", notify)
      // alert("Open Notification: " + notify.body)
    }

    return () => {
      //console.log("[App] unRegister")
      fcmService.unRegister()
      localNotificationService.unregister()
    }

  }, [])

  return (

    <ChatProv>
      <Main />
    </ChatProv>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
