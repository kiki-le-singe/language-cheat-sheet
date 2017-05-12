import React, { PropTypes, PureComponent } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'

import colors from '../../../../styles/colors'
import styles from '../../styles'

export default class Row extends PureComponent {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  onPress = () => {
    const { data, onPress } = this.props

    onPress(data)
  }

  render() {
    const { data } = this.props
    const { baseForm, pastSimple, pastParticiple, translation } = data

    return (
      <TouchableHighlight onPress={this.onPress} underlayColor={colors.blue}>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text>{baseForm}</Text>
            <Text>{pastSimple}</Text>
            <Text>{pastParticiple}</Text>
          </View>

          <Text style={styles.translationText}>{translation}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
