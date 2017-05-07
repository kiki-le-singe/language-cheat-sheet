import React, { PureComponent } from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class SheetCheatScreen extends PureComponent {
  static navigationOptions = {
    tabBarLabel: 'Sheet Cheat',
  }

  render() {
    return (
      <View>
        <Text>Welcome to the Sheet Cheat screen!</Text>
      </View>
    )
  }
}
