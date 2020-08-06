import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';
import MainScreen from './src/components/MainScreen'
import ChatScreen from './src/components/ChatScreen'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import ChatProv, { SockContext } from './src/components/_useChat'
import Main from './Main'

export default function App() {
  // const [chat, setChat] = useState([
  //   {
  //     name: 'Franco Antú di Nápoli',
  //     email: 'francoadinapoli@gmail.com',
  //     tel: '1121916528',
  //     emp: 'Maxpower Industrial Automation',
  //     socket: 1,
  //     messages: [
  //       {from: 0, msg: 'Bienvenido al chat de Maxpower, en que podemos ayudarte?', id: '1'},
  //       {from: 1, msg: 'Hola que tal, queria preguntar sobre un variador ATV, me comunico de la empresa spicy', id: '2'},
  //     ]
  //   },
  //   {
  //     name: 'Tomás Vera',
  //     email: 'francoadinapoli@gmail.com',
  //     tel: '1121916528',
  //     emp: 'Maxpower Industrial Automation',
  //     socket: 2,
  //     messages: [
  //         {from: 0, msg: 'Bienvenido al chat de Maxpower, en que podemos ayudarte?', id: '1'},
  //         {from: 1, msg: 'Hola que tal, queria preguntar sobre un variador ATV, me comunico de la empresa spicy', id: '2'},
  //         {from: 0, msg: 'Perfecto Tomás, en los próximos minutos estaremos enviandole su cotización al mail adjunto', id: '3'},
  //     ]
  //   },
  // ])
  // const [current, setCurrent] = useState({}) 

  // const {chats, sendMessageServer} = useContext(SockContext)

  // const [clientChats, setClient] = useState(chats)

  // const [currentChat, setCurrentChat] = useState({})

  // useEffect(() => {

  //   setClient(chats)
  // }, [chats])
  
  // const Stack = createStackNavigator()


  // const Home = props => (
  //   <ChatProv>
  //     <MainScreen {...props} chats={clientChats} set={setCurrentChat}/>
  //   </ChatProv>
  
  // )
  // const Conversation = props => (<ChatScreen {...props} chat={currentChat} sendMessageServer={sendMessageServer}/>)


  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       screenOptions={{
  //         headerShown: false
  //       }}
  //     >
  //       <Stack.Screen name="Home" component={Home} />
  //       <Stack.Screen name="Conversation" component={Conversation} />
  //     </Stack.Navigator>
  //   </NavigationContainer>

  //   // <MainScreen chats={chat}/>
  //   // <ChatScreen chat={chat[0]}/>
  // )
  return (
    <ChatProv>
      <Main/>
    </ChatProv>
  )
}


