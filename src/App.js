import { StackNavigator } from 'react-navigation'

import HomeScreen from './Screens/HomeScreen'
import IrregularVerbsScreen from './Screens/IrregularVerbsScreen'

export default StackNavigator({
  Home: { screen: HomeScreen },
  IrregularVerbs: { screen: IrregularVerbsScreen },
})
