import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

export default class IrregularVerbDetailScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: `Irregular Verb - ${navigation.state.params.verb}`,
  })

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { goBack, state } = this.props.navigation
    const { verb } = state.params

    return (
      <View>
        <Text>Detail of Irregular Verb `{verb}`</Text>
        <Button
          onPress={() => goBack()}
          title="Go back IrregularVerbs screen"
        />
      </View>
    )
  }
}
