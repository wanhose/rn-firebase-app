import React, { createContext, useState } from 'react'

const InAppContext = createContext()

const InAppProvider = (props) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState(null)

    return (
        <InAppContext.Provider value = {{ 
                isCreateModalOpen, setIsCreateModalOpen,
                isEditModalOpen, setIsEditModalOpen,
                taskToEdit, setTaskToEdit
            }}>
            { props.children }
        </InAppContext.Provider>
    )
}

export { InAppContext, InAppProvider }