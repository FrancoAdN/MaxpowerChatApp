import React from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import Header from './ScreenChat/Header'
import MainContent from './ScreenChat/MainContent'
import Sender from './ScreenChat/Sender'
export default function ChatScreen({ chat, sendMessageServer }) {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0
    return (

        <View style={{
            flex: 1,
            backgroundColor: 'rgb(47, 55, 63)'
        }}>

            <Header content={chat} />
            <MainContent messages={chat.messages} />
            <Sender send={sendMessageServer} to={chat.socket_id} />
        </View>


    )
}
