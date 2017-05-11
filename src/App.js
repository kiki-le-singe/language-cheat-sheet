import React, { PureComponent } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import IrregularVerbDetailScreen from './Screens/IrregularVerbDetailScreen'
import SheetCheatScreen from './Screens/SheetCheatScreen'
import IrregularVerbsScreen from './Screens/IrregularVerbsScreen'
import configureStore from './redux/store'
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

const AppNavigator = StackNavigator(
  {
    Home: { screen: LanguageCheatSheetTabNavigator },
    IrregularVerbDetail: { screen: IrregularVerbDetailScreen },
  },
)

const store = configureStore()

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
