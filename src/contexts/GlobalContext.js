import React, { createContext, useState } from 'react'

const GlobalContext = createContext()

const GlobalProvider = (props) => {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)

    return (
        <GlobalContext.Provider value = {{ 
                initializing, setInitializing,
                user, setUser 
            }}>
            { props.children }
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }