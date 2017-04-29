import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    borderTopWidth: 1,
    borderTopColor: Colors.cloud
  },
  text: {
    color: Colors.silver,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.doubleBaseMargin
  }
})
