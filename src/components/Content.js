import React from 'react'
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Content({ chat, set }) {
    return (
        <View style={styles.contentView}>
            <FlatList
                data={chat}
                renderItem={({ item }) => (<ChatUser chat={item} set={set} />)}
                keyExtractor={item => item.socket_id}
            />
        </View>
    )
}



function ChatUser({ chat, set }) {
    const navigation = useNavigation()
    const handleOn = () => {
        set(chat)
        navigation.navigate('Conversation')
    }
    return (
        <TouchableOpacity style={styles.chatUserContainer} onPress={handleOn}>
            <Image source={{ uri: 'http://api.maxpower-ar.com/imagen/user.png' }} style={styles.userImg} />
            <View style={styles.chatInfo}>
                <Text numberOfLines={1} style={styles.nameTxt}>{chat.name}</Text>
                <Text numberOfLines={1} style={styles.lastMessage}>{chat.messages[chat.messages.length - 1].msg}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    contentView: {
        flex: 9
    },
    chatUserContainer: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(121, 134, 145, 0.4)',
        borderBottomWidth: 0.5
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    chatInfo: {
        width: '75%',
        height: '100%',
        justifyContent: 'space-evenly'
    },
    nameTxt: {
        fontSize: 22,
        color: '#000'
    },
    lastMessage: {
        fontSize: 15,
        color: 'rgb(121, 134, 145)'
    }
})



