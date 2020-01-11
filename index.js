import React from 'react'
import { AppRegistry } from 'react-native'
import { GoogleSignin } from '@react-native-community/google-signin'
import 'react-native-gesture-handler'
import App from './src/components/App/App'
import { GlobalProvider } from './src/contexts/GlobalContext'
import googleConfig from './src/data/googleConfig'
import { name as appName } from './src/data/app.json'

GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
    .then(() => {
        GoogleSignin.configure(googleConfig)
    })
    .catch(error => {
        console.log('Google Play Services are unavailable');
    })

const AppContainer = () => (
    <GlobalProvider>
        <App/>
    </GlobalProvider>
)

AppRegistry.registerComponent(appName, () => AppContainer)
