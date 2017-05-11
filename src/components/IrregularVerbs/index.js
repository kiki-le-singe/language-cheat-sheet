import React, { PropTypes, PureComponent } from 'react'
import {
  ListView,
  View,
  Text,
} from 'react-native'

export default class IrregularVerbs extends PureComponent {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)

    const { data } = props
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  renderRow = (rowData) => {
    const { baseForm, pastSimple, pastParticiple } = rowData

    return (
      <View>
        <Text>{baseForm}</Text>
        <Text>{pastSimple}</Text>
        <Text>{pastParticiple}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}
