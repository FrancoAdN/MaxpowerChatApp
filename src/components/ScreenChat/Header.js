import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header({content}) {
    const navigation = useNavigation()
    return (
        <View style={styles.headerView}>
            <View style={styles.topView}>
                <View style={styles.head}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('./back.png')} style={{width: 30, height: 25}}/>
                    </TouchableOpacity>
                    <View style={styles.title}>
                        <Text style={styles.headText}>{content.name.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.botView}>
                <View style={styles.empContainer}>
                    <Text style={styles.emp}>{content.emp.toUpperCase()}</Text>
                </View>
                
                <TouchableOpacity>
                    <Image source={require('./info.png')} style={{width: 30, height: 30}}/>
                </TouchableOpacity>

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
        flexDirection: 'column-reverse',
    },
    botView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    head: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        width: '80%',
        alignItems: 'center',
        left: -10
    },
    headText: {
        fontSize: 20,
        letterSpacing: 0,
        color: '#fff',
    },
    empContainer: {
        width: '75%',
        height: '100%',
        justifyContent: 'center',
    },
    emp: {
        color: '#fff',
        fontSize: 18,
        letterSpacing: 0
    }
    

})

