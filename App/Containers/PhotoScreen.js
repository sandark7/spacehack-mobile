import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import I18n from 'react-native-i18n'
import {Actions} from 'react-native-router-flux'
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
    this.loading = true
    console.log('uploading')
    Api.upload(path)
      .then(this.onUploadResponse, this.onError)
  }
  onUploadResponse = res => {
    if (!res.ok) return (this.loading = false)
    console.log('got ok')
    Api.get()
      .then(this.onGetBoundingBox, this.onError)
  }

  onGetBoundingBox = data => {
    console.log('got data', data)
    let {photo_url} = data
    Image.getSize(photo_url, (width, height) => {
      Actions.boxScreen({...data, width, height})
    }, console.error)
  }

  onError = (err) => {
    this.loading = false
    console.error(err)
  }

  isLoading = () => {
    return this.loading
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.cameraContainer}
          captureQuality={Camera.constants.CaptureQuality.medium}
          captureTarget={Camera.constants.CaptureTarget.disk}
          ref={cam => (this.camera = cam)}
          >
          <TouchableOpacity
            focusedOpacity={0.7}
            activeOpacity={0.7}
            onPress={this.capture}
            style={styles.buttonContainer}
            >
            <Text
              style={styles.buttonText}
              >{this.isLoading() ? I18n.t('loading') : I18n.t('capture')}</Text>
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
