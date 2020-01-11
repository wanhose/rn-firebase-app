import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Content } from 'native-base'
import { GlobalContext } from '../contexts/GlobalContext'

const HomeScreen = () => {
    let { user } = useContext(GlobalContext)

    useEffect(() => {
        if (user === null) {
            Actions.replace('auth')
        }
    }, [])

    return (
        <Container>
            <Content style = { styles.content }>

            </Content>
        </Container>
    )
}

const HomeScreenTitle = () => {
    return (
        <View style = { styles.titleContainer }>
            <Text style = {{ ...styles.text, ...styles.white }}>CLOUD</Text>
            <Text style = {{ ...styles.text, ...styles.turquoise }}>DISTRICT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#575756'
    },
    text: {
        fontFamily: 'CeraStencilPRO-Medium',
        fontSize: 24
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingStart: 15
    },
    turquoise: {
        color: '#00e6ec'
    },
    white: {
        color: '#fff'
    }
})

export { HomeScreen, HomeScreenTitle }