import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'

const Foo = () => (
  <View>
    <Text>qaqaaqa</Text>
  </View>
)

const Search = () => (
  <View>
    <Text>Search</Text>
  </View>
)

export default class IrregularVerbsScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    const isSearch = state.params && state.params.mode === 'search'
    const headerTitleComponent = isSearch ? <Search /> : <Foo />

    return {
      tabBarLabel: 'Irregular Verbs',
      // headerLeft: <Button title="LeftBtn" />,
      headerTitle: headerTitleComponent,
      headerRight: (
        <Button
          title={isSearch ? 'Cancel' : 'Search'}
          onPress={() => setParams({ mode: isSearch ? 'none' : 'search' })}
        />
      ),
    }
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text>List of Irregular Verbs</Text>
        <Button
          onPress={() => navigate('IrregularVerbDetail', { verb: 'Can' })}
          title="Go to Irregular Verbs Detail Screen"
        />
      </View>
    )
  }
}
