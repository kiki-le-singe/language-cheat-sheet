import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class IrregularVerbsScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Irregular Verbs',
  }

  render() {
    return (
      <View>
        <Text>List of Irregular Verbs</Text>
      </View>
    )
  }
}
