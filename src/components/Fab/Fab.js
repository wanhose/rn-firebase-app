import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const Fab = (props) => {
    const {
        color = '#000',
        icon,
        onPress
    } = props

    return (
        <View style = { styles.container }>
            <TouchableOpacity 
                onPress = { onPress }
                style = {{ ...styles.button, backgroundColor: color }}>
                { icon }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 32,
        height: 56,
        justifyContent: 'center',
        width: 56
    },
    container: {
        bottom: 20,
        right: 20,
        position: 'absolute',
    }
})

export default Fab