import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import MainScreen from './src/components/MainScreen'
import ChatScreen from './src/components/ChatScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { SockContext } from './src/components/_useChat'


export default function Main() {
  const { chats, sendMessageServer, connect } = useContext(SockContext)

  const [clientChats, setClient] = useState(chats)

  const [currentChat, setCurrentChat] = useState({})



  useEffect(() => {
    setClient(chats)

  }, [chats])

  const Stack = createStackNavigator()
  const Home = props => (<MainScreen {...props} chats={clientChats} set={setCurrentChat} />)
  const Conversation = props => (<ChatScreen {...props} chat={currentChat} sendMessageServer={sendMessageServer} />)


  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conversation" component={Conversation} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
