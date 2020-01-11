import React, { useContext, useEffect } from 'react'
import { firebase } from '@react-native-firebase/auth'
import { StatusBar, StyleSheet, View } from 'react-native'
import Navigation from '../Navigation/Navigation'
import { GlobalContext } from '../../contexts/GlobalContext'

const App = () => {
    let { initializing, setInitializing, setUser } = useContext(GlobalContext)

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(_onAuthStateChanged)
        
        return subscriber
    }, [])

    const _onAuthStateChanged = (user) => {
        setUser(user)
        initializing ? setInitializing(false) : null
    }

    return (
        <View style = { styles.root }>
            <StatusBar backgroundColor = '#333'/>
            <Navigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default App