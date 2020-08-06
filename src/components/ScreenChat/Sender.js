import React, {useState} from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Platform } from 'react-native'

export default function Sender({send, to}) {
    const [text, setText] = useState('')
    const handlePress = () => {
        const message = {
            to, text
        }
        send(message)
        setText('')
    }
    return (
        <View style={styles.sendView}>
            <View style={styles.topView}>
                <TextInput style={styles.input} value={text} onChangeText={txt => setText(txt)}/>
                <TouchableOpacity style={styles.sendBtn} onPress={handlePress}>
                    <Image source={require('./send.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sendView: {
        flex: 1.2,
        backgroundColor: '#f0f0f0',
        paddingTop: (Platform.OS === 'ios') ? 10 : 0 
    },
    topView: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    sendBtn: {
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '75%',
        height: 45,
        backgroundColor: '#e3e3e3',
        borderRadius: 30,
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10
    }

})
