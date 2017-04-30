import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  image: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    resizeMode: 'contain'
  }
})
