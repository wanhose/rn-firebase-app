import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'native-base'
import Modal from 'react-native-modal'
import { InAppContext } from '../../contexts/InAppContext'
import TaskService from '../../services/TaskService'

const CreateTaskModal = (props) => {
    const [descriptionText, setDescriptionText] = useState('')
    let { isCreateModalOpen, setIsCreateModalOpen } = useContext(InAppContext)


    const _onCreateButtonPress = () => {
        TaskService.add(descriptionText)
            .then(() => {
                setIsCreateModalOpen(false)
            })
    }

    const _onModalHide = () => {
        setDescriptionText('')
    }

    return (
        <View style = { styles.root}>
            <Modal 
                animationIn = 'fadeIn'
                animationOut = 'fadeOut'
                isVisible = { isCreateModalOpen }
                onModalHide = { _onModalHide }>
                <View style = { styles.container }>
                    <View>
                        <Text style = { styles.title }>Crear una nueva tarea</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText = {text => setDescriptionText(text)}
                            placeholder = 'Inserta una descripción...'
                            style = { styles.input }
                            value = { descriptionText }/>
                    </View>
                    <View style = { styles.buttonContainer }>
                        <Button
                            onPress = {() => setIsCreateModalOpen(false) }
                            transparent>
                            <Text style = { styles.cancelButtonText }>CANCELAR</Text>
                        </Button>
                        <Button
                            disabled = { descriptionText.trim() === '' }
                            onPress = { _onCreateButtonPress }
                            transparent>
                            <Text style = {{ ...styles.createButtonText, color: descriptionText.trim() === '' ? 'lightgray' : 'black' }}>CREAR</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
        
    )
}

const EditTaskModal = () => {
    const [descriptionText, setDescriptionText] = useState('')
    let { isEditModalOpen, setIsEditModalOpen, taskToEdit, setTaskToEdit } = useContext(InAppContext)

    useEffect(() => {
        if (taskToEdit !== null) {
            setDescriptionText(taskToEdit.description)
        } else {
            setIsEditModalOpen(false)
        }
    }, [isEditModalOpen])

    const _onUpdateButtonPress = () => {
        TaskService.update(taskToEdit.id, { description: descriptionText })
            .then(() => {
                setIsEditModalOpen(false)
                setTaskToEdit(null)
            })
    }

    const _onModalHide = () => {
        setDescriptionText('')
    }

    return (
        <View style = { styles.root}>
            <Modal 
                animationIn = 'fadeIn'
                animationOut = 'fadeOut'
                isVisible = { isEditModalOpen }
                onModalHide = { _onModalHide }>
                <View style = { styles.container }>
                    <View>
                        <Text style = { styles.title }>Actualizar una tarea existente</Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText = {text => setDescriptionText(text)}
                            placeholder = 'Inserta una descripción...'
                            style = { styles.input }
                            value = { descriptionText }/>
                    </View>
                    <View style = { styles.buttonContainer }>
                        <Button
                            onPress = {() => setIsEditModalOpen(false) }
                            transparent>
                            <Text style = { styles.cancelButtonText }>CANCELAR</Text>
                        </Button>
                        <Button
                            disabled = { descriptionText.trim() === '' }
                            onPress = { _onUpdateButtonPress }
                            transparent>
                            <Text style = {{ ...styles.createButtonText, color: descriptionText.trim() === '' ? 'lightgray' : 'black' }}>ACTUALIZAR</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        paddingTop: 20
    },
    cancelButtonText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold'
    },
    createButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 15,
        paddingHorizontal: 15
    },
    root: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export { CreateTaskModal, EditTaskModal }