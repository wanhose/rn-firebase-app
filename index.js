import { AppRegistry } from 'react-native'
import 'react-native-gesture-handler'
import App from './src/components/App/App'
import { name as appName } from './src/data/app.json'


AppRegistry.registerComponent(appName, () => App)
