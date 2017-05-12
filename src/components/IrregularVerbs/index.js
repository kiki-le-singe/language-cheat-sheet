import React, { PropTypes, PureComponent } from 'react'
import {
  ListView,
  View,
  Text,
} from 'react-native'

import Row from './components/Row'
import styles from './styles'

export default class IrregularVerbs extends PureComponent {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
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

  navigateToDetailScreen = (verb) => {
    const { navigation } = this.props
    const { navigate } = navigation

    navigate('IrregularVerbDetail', { verb })
  }

  renderRow = rowData => (
    <Row data={rowData} onPress={this.navigateToDetailScreen} />
  )

  renderSeparator = (sectionID, rowID) => (
    <View
      key={`${sectionID}-${rowID}`}
      style={styles.separator}
    />
  )

  renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Base Form</Text>
      <Text style={styles.headerText}>Past Simple</Text>
      <Text style={styles.headerText}>Past Participle</Text>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />
      </View>
    )
  }
}
