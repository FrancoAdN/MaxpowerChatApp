import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import Content from './Content'


export default function MainScreen({chats, set}) {
    return (
        <View style={styles.mainContainer}>
            <Header />
            <Content chat={chats} set={set}/>
        </View>
    )
}

const styles =  StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
    
})
