import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'native-base'
import { InAppContext } from '../../contexts/InAppContext'

const Fab = () => {
    let { setIsCreateModalOpen } = useContext(InAppContext)

    const _onFabPress = () => {
        setIsCreateModalOpen(true)
    }

    return (
        <View style = { styles.container }>
            <TouchableOpacity 
                onPress = { _onFabPress }
                style = {{ ...styles.button, backgroundColor: 'turquoise' }}>
                <Icon name = 'add'/>
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