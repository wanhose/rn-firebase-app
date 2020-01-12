import React, { useEffect, useReducer, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { FlatList, StyleSheet, Text } from 'react-native'
import { CheckBox, ListItem } from 'native-base'
import TaskService from '../../services/TaskService'

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'refresh':
            return action.data
        default:
            return state
    }
}

const TaskList = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('tasks')
            .orderBy('created_at', 'desc')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })

                dispatch({ type: 'refresh', data: data })
            })

        return () => unsubscribe()
    }, [])

    const _renderItem = ({ item }) => <TaskListItem { ...item }/>

    return (
        <FlatList
            data = { tasks }
            keyExtractor = {item => item.id}
            renderItem = { _renderItem }
            style = { styles.list }/>
    )
}

const TaskListItem = (props) => {
    return (
        <ListItem 
            noBorder
            noIndent
            onPress = {() => TaskService.update(props.id, { done: !props.done })}
            style = { styles.item }>
            <CheckBox 
                checked = { props.done }
                color = 'turquoise'
                style = { styles.checkBox }/>
            <Text style = {{ ...styles.itemText, textDecorationLine: props.done ? 'line-through' : 'none' }}>{ props.description }</Text>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 5
    },
    itemText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 10
    },
    list: {
        flex: 1
    }
})

export { TaskList }