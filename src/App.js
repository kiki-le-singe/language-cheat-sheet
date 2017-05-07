import { StackNavigator, TabNavigator } from 'react-navigation'

import IrregularVerbDetailScreen from './Screens/IrregularVerbDetailScreen'
import SheetCheatScreen from './Screens/SheetCheatScreen'
import IrregularVerbsScreen from './Screens/IrregularVerbsScreen'

import colors from './styles/colors'

const { blue, white } = colors
const LanguageCheatSheetTabNavigator = TabNavigator(
  {
    SheetCheat: { screen: SheetCheatScreen },
    IrregularVerbs: { screen: IrregularVerbsScreen },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: white,
      activeBackgroundColor: blue,
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },

      // Android
      indicatorStyle: {
        backgroundColor: white,
      }
    },
  }
)

// Use default title for all tab screens
LanguageCheatSheetTabNavigator.navigationOptions = {
  title: 'Language Cheat Sheet',
}

export default StackNavigator(
  {
    Home: { screen: LanguageCheatSheetTabNavigator },
    IrregularVerbDetail: { screen: IrregularVerbDetailScreen },
  },
)
