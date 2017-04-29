import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: 0
  },
  cameraContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
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
