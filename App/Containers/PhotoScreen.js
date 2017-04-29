import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import Camera from 'react-native-camera'
import Api from '../Helpers/ApiHelper'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PhotoScreenStyle'

class Photo extends React.Component {

  capture = () => {
    this.camera.capture()
      .then(this.onCapture)
  }

  onCapture = ({path}) => {
    Api.upload(path)
      .then(res => console.log(res))
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.cameraContainer}
          captureQuality={Camera.constants.CaptureQuality.medium}
          captureTarget={Camera.constants.CaptureTarget.disk}
          ref={cam => { this.camera = cam; return }}
          >
          <TouchableOpacity
            focusedOpacity={0.7}
            activeOpacity={0.7}
            onPress={this.capture}
            style={styles.buttonContainer}
            >
            <Text
              style={styles.buttonText}
              >{I18n.t('capture')}</Text>
          </TouchableOpacity>
        </Camera>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo)
