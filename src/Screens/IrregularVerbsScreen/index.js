import React, { PropTypes, PureComponent } from 'react'
import {
  View,
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux'

import { fetch } from '../../redux/actions/IrregularVerbsActions'
import IrregularVerbs from '../../components/IrregularVerbs'

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

const actions = { fetch }
const mapStateToProps = state => ({
  irregularVerbs: state.irregularVerbs,
})

export class IrregularVerbsScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    const isSearch = state.params && state.params.mode === 'search'
    const tabBarVisible = state.params && state.params.tabBarVisible
    const headerTitleComponent = isSearch ? <Search /> : <Foo />

    return {
      tabBarVisible,
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
    fetch: PropTypes.func.isRequired,
    irregularVerbs: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.fetch()
  }

  hideTabBar = () => {
    this.toggleTabBar(false)
  }

  showTabBar = () => {
    this.toggleTabBar()
  }

  toggleTabBar = (visible = true) => {
    const { setParams } = this.props.navigation

    setParams({ tabBarVisible: visible })
  }

  render() {
    const { navigation, irregularVerbs } = this.props
    const { verbs } = irregularVerbs

    if (!verbs.length) {
      return null
    }

    return (
      <View>
        <IrregularVerbs
          data={verbs}
          navigation={navigation}
          hideTabBar={this.hideTabBar}
          showTabBar={this.showTabBar}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, actions)(IrregularVerbsScreen)
