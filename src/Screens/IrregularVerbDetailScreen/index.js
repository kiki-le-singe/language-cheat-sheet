import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

export default class IrregularVerbDetailScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.verb.baseForm,
  })

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { goBack, state } = this.props.navigation
    const { pastSimple, pastParticiple, translation } = state.params.verb

    return (
      <View>
        <Text>{pastSimple}</Text>
        <Text>{pastParticiple}</Text>
        <Text>{translation}</Text>
        <Button
          onPress={() => goBack()}
          title="Go back IrregularVerbs screen"
        />
      </View>
    )
  }
}
