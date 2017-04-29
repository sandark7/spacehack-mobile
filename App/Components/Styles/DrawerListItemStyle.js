import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  icon: {
    color: Colors.silver,
    flex: 1,
    marginLeft: 10
  },
  text: {
    color: Colors.coal,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    flex: 4
  }
})
