import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  button: {
    backgroundColor: Colors.ebay_blue,
    color: Colors.snow
  }
})
