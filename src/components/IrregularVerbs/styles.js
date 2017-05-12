import { StyleSheet } from 'react-native'

import colors from '../../styles/colors'

const { hairlineWidth } = StyleSheet
const { white, grey, blue } = colors

export default StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  rowContainer: {
    backgroundColor: white,
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  translationText: {
    color: blue,
    fontSize: 12,
    paddingTop: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: blue,
  },
  headerText: {
    color: white,
    fontSize: 16,
  },
  separator: {
    borderBottomWidth: hairlineWidth,
    borderBottomColor: grey,
  },
})
