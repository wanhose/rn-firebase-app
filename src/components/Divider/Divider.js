import React from 'react'
import { StyleSheet, View } from 'react-native'

const Divider = (props) => <View style = {{ ...styles.divider, ...{ borderColor: props.color }}}/>

const styles = StyleSheet.create({
    divider: {
        borderWidth: 0.5,
        marginVertical: 10,
        width: '100%'
    }
})

export default Divider