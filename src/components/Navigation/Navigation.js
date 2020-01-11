import React from 'react'
import { StyleSheet } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import { Button, Icon } from 'native-base'
import AuthScreen from '../../screens/AuthScreen'
import { HomeScreen, HomeScreenTitle } from '../../screens/HomeScreen'
import AuthService from '../../services/AuthService'

const Navigation = () => {
    return (
        <Router>
            <Stack>
                <Scene
                    component = { AuthScreen }
                    hideNavBar = { true }
                    initial
                    key = 'auth'
                    title = 'Auth'/>
                <Scene 
                    component = { HomeScreen }
                    navigationBarStyle = { styles.header }
                    key = 'home'
                    renderRightButton = {() => (
                        <Button
                            onPress = {() => AuthService.logout()} 
                            transparent>
                            <Icon
                                color = 'black'
                                name = 'exit'
                                style = {{ color: 'white' }}/>
                        </Button>
                    )}
                    renderTitle = { HomeScreenTitle }/>
            </Stack>
        </Router>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333',
        elevation: 0
    },
    title: {
        fontFamily: 'CeraStencilPRO-Medium'
    }
})

export default Navigation