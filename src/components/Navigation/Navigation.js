import React from 'react'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/AuthScreen'
import HomeScreen from '../../screens/HomeScreen'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationNativeContainer>
            <Stack.Navigator initialRouteName = 'Auth'>
                <Stack.Screen
                    component = { AuthScreen }
                    name = 'Auth'
                    options = {{
                        headerShown: false
                    }}/>
                <Stack.Screen 
                    component = { HomeScreen }
                    name = 'Home'/>
            </Stack.Navigator>
        </NavigationNativeContainer>
    )
}

export default Navigation