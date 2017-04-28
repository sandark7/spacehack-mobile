import React from 'react'
import {
  View,
  Image
} from 'react-native'
import {Images} from '../Themes'
import styles from './Styles/MainContentMockStyle'

export default class MainContentMock extends React.Component {

  onLayout = (e) => {
    if (this.state && this.state.imageSize) { return }
    let imageOrig = {width: 720, height: 3588}
    const { width } = e.nativeEvent.layout
    let imageHeight = (width * imageOrig.height) / imageOrig.width
    this.setState({
      imageSize: {
        height: imageHeight,
        width: null,
        resizeMode: 'contain'
      }
    })
  }

  render () {
    let imageSize = this.state ? this.state.imageSize : {width: null, height: null}
    return (
      <View style={styles.container}>
        <Image
          onLayout={this.onLayout}
          source={Images.main_middle_mock}
          style={imageSize}
        />
      </View>
    )
  }
}

// // Prop type warnings
// MainContentMock.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// MainContentMock.defaultProps = {
//   someSetting: false
// }
