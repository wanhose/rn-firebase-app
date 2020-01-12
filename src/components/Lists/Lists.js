import React, { useContext, useEffect, useReducer, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { CheckBox } from 'native-base'
import { InAppContext } from '../../contexts/InAppContext'
import TaskService from '../../services/TaskService'

const taskReducer = (state, action) => {
    switch(action.type) {
        case 'refresh':
            return action.data
        default:
            return state
    }
}

const TaskList = () => {
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
    const [isWaiting, setIsWaiting] = useState(false)
    let { setIsEditModalOpen, taskToEdit, setTaskToEdit } = useContext(InAppContext)

    const _onItemLongPress = () => {
        setTaskToEdit(props)
        if (taskToEdit !== null) {
            setIsEditModalOpen(true)
        }
    }

    const _onItemPress = () => {
        setIsWaiting(true)
        TaskService.update(props.id, { done: !props.done })
            .finally(() => {
                setIsWaiting(false)
            })
    }

    return (
        <TouchableOpacity
            disabled = { isWaiting }
            onLongPress = { !props.done ? _onItemLongPress : null }
            onPress = { _onItemPress }
            style = { styles.itemContainer }>
            <CheckBox 
                checked = { props.done }
                color = { props.done ? 'turquoise' : 'lightgray' }
                style = { styles.checkBox }/>
            <Text numberOfLines = { 1 } style = {{ ...styles.itemText, textDecorationLine: props.done ? 'line-through' : 'none' }}>{ props.description }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 20
    },
    itemText: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 25
    },
    list: {
        flex: 1
    }
})

export { TaskList }