import React, { useContext, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TaskList } from '../components/Lists/Lists'
import Fab from '../components/Fab/Fab'
import { CreateTaskModal, EditTaskModal } from '../components/Modals/Modals'
import { GlobalContext } from '../contexts/GlobalContext'
import { InAppProvider } from '../contexts/InAppContext'

const HomeScreen = () => {
    let { user } = useContext(GlobalContext)

    useEffect(() => {
        if (user === null) {
            Actions.replace('auth')
        }
    }, [])

    return (
        <View style = { styles.content }>
            <InAppProvider>
                <Profile/>
                <List/>
                <Fab/>
                <CreateTaskModal/>
                <EditTaskModal/>
            </InAppProvider>
        </View>
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

const List = () => {
    return (
        <View style = { styles.listContainer }>
            <TaskList/>
        </View>
    )
}

const Profile = () => {
    let { user } = useContext(GlobalContext)

    return (
        <View style = { styles.profileContainer }>
            <Image source = {{ uri: user.photoURL }} style = { styles.profileImage }/>
            <Text style = { styles.profileName }>{ user.displayName }</Text>
            <Text style = { styles.profileEmail }>{ user.email }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    listContainer: {
        backgroundColor: '#575756',
        flexGrow: 1
    },
    profileContainer: {
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 20
    },
    profileImage: {
        borderColor: '#fff',
        borderRadius: 48,
        borderWidth: 2.5,
        height: 96,
        width: 96
    },
    profileEmail: {
        color: '#00e6ec',
        marginTop: 5
    },
    profileName: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10
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