import React from 'react'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native'

export default function MainContent({messages}) {
    return (
        <View style={styles.mainContaienr}>
            <FlatList 
                data={messages}
                renderItem={({item}) => (<PrintMessage msg={item}/>)}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}



function PrintMessage({msg}) {
    if (msg.from) {
        // MESSAGE FROM CLIENT
        return (
            <View style={styles.clientMessage}>
                <Image source={{uri: 'http://api.maxpower-ar.com/imagen/user.png'}} style={styles.img}/>
                
                <View style={styles.messageContainer}>
                    <Text style={styles.txtMessage}>{msg.msg}</Text>
                </View>

            </View>
        )
    }

    // MESSAGE FROM SERVER
    return (
        <View style={styles.serverMessage}>
            <Image source={{uri: 'http://api.maxpower-ar.com/imagen/logo.png'}} style={styles.img}/>
                
            <View style={styles.serverMessageCont}>
                <Text style={styles.serverText}>{msg.msg}</Text>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    mainContaienr: {
        flex: 9
    },
    clientMessage: {
        width: '100%',
        minHeight: 60,
        flexDirection: 'row',
        // alignItems: 'center'
    },
    serverMessage: {
        width: '100%',
        minHeight: 60,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start'
    },
    img: {
        margin: 5,
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#fff'
    },
    messageContainer: {
        maxWidth: '60%',
        margin: 5,
        backgroundColor: '#ce110a',
        padding: 10,
        borderRadius: 15
    },
    txtMessage: {
        fontSize: 18,
        color: '#fff'
    },
    serverMessageCont: {
        maxWidth: '60%',
        margin: 5,
        backgroundColor: 'rgb(244, 248, 248)',
        padding: 10,
        borderRadius: 15,
        marginTop:  10
    },
    serverText: {
        fontSize: 18,
        color: 'rgb(121, 121, 121)'
    },
    
})