import React, { useContext, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import { StatusBar, StyleSheet, View } from 'react-native'
import Navigation from '../Navigation/Navigation'
import { GlobalContext } from '../../contexts/GlobalContext'

const App = () => {
    let { setUser } = useContext(GlobalContext)

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])

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