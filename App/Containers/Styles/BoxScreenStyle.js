import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export const box = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 100,
  height: 100,
  backgroundColor: 'green',
  borderWidth: 1,
  borderColor: 'green',
  zIndex: 100,
  opacity: 0.6
}
export const photo = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: Metrics.screenWidth,
  height: 239,
  resizeMode: 'contain'
}

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  photo,
  box,
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    height: 120,
    left: 0,
    right: 0,
    backgroundColor: Colors.silver,
    borderTopWidth: 1,
    alignItems: 'center'
  },
  buttonText: {
    flex: 1,
    color: Colors.snow,
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center',
    borderColor: Colors.silver,
    borderWidth: 1
  }
})
