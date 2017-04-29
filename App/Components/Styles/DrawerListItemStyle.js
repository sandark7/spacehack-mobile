import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: Metrics.baseMargin
  },
  icon: {
    color: Colors.silver,
    flex: 1,
    marginLeft: Metrics.baseMargin
  },
  text: {
    color: Colors.coal,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 20,
    flex: 4
  }
})
