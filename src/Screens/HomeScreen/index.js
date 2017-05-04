import React, { PureComponent, PropTypes } from 'react'
import {
  Text,
  View,
  Button,
} from 'react-native'

export default class HomeScreen extends PureComponent {
  static navigationOptions = {
    title: 'Welcome',
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>Hello, LanguageCheatSheet App!</Text>
        <Button
          onPress={() => navigate('IrregularVerbs')}
          title="Go to Irregular Verbs Screen"
        />
      </View>
    )
  }
}
