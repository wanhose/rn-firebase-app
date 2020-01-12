import React, { useContext, useEffect, useState } from 'react'
import { Actions } from 'react-native-router-flux'
import { Image, StyleSheet, View } from 'react-native'
import { Button, Container, Content, Spinner, Text } from 'native-base'
import { GlobalContext } from '../contexts/GlobalContext'
import AuthService from '../services/AuthService'
import GoogleLogo from '../assets/images/google-g-logo.png'

const AuthScreen = () => {
    const [isWaiting, setIsWaiting] = useState(false)
    let { user } = useContext(GlobalContext)

    useEffect(() => {
        if (user !== null) {
            Actions.replace('home')
        }
    }, [])

    const _onButtonPress = () => {
        setIsWaiting(true)

        AuthService.login()
            .then(user => {
                if (user !== null) {
                    Actions.replace('home')
                }
            }).catch(error => {
                setIsWaiting(false)
            })
    }

    return (
        <Container>
            <Content
                contentContainerStyle = { styles.root }
                padder>
                <Text style = {{ ...styles.text, ...styles.white }}>CLOUD</Text>
                <Text style = {{ ...styles.text, ...styles.turquoise }}>DISTRICT</Text>
                <View style = { styles.button }>
                    <Button
                        bordered
                        disabled = { isWaiting }
                        light
                        onPress = { _onButtonPress }>
                        { isWaiting ? <Spinner color = 'white' size = { 20 } style = { styles.spinner }/> : <Image source = { GoogleLogo } style = { styles.image } />}
                        <Text>Inicia sesión con Google</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: '75%'
    },
    image: {
        height: 20,
        marginStart: 15,
        width: 20
    },
    root: {
        alignItems: 'center',
        backgroundColor: '#575756',
        flex: 1,
        justifyContent: 'center'
    },
    spinner: {
        marginStart: 15
    },
    text: {
        fontFamily: 'CeraStencilPRO-Medium',
        fontSize: 48,
        lineHeight: 44
    },
    turquoise: {
        color: '#00e6ec'
    },
    white: {
        color: '#fff'
    }
})

export default AuthScreen