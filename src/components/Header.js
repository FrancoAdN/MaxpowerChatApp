import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.headerView}>
            <View style={styles.topView}>
                <View style={styles.head}>
                    <Image source={{uri: 'http://api.maxpower-ar.com/imagen/logo.png'}} style={styles.logoImg}/>
                    <Text style={styles.headText}>CHAT</Text>
                </View>
            </View>
            <View style={styles.botView}>
                <View style={styles.chat}>
                    <Image source={require('./chat.png')} style={{width: 35, height: 35}}/>
                </View>

                <View style={styles.user}>
                    <Image source={require('./user-male.png')} style={{width: 35, height: 35}}/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        flex: 2,
        backgroundColor: '#ce110a'
    },
    topView: {
        flex: 2,
        flexDirection: 'column-reverse'
    },
    botView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    head: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        left: -125,
        borderWidth: 3,
        borderColor: '#fff'
        
    },
    headText: {
        fontSize: 20,
        letterSpacing: 8,
        color: '#fff',
        left: -20
    },
    chat: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems:'center',
        borderBottomWidth: 3,
        borderBottomColor: 'white'
    },
    user: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
