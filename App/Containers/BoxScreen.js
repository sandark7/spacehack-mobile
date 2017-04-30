import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
import I18n from 'react-native-i18n'
import { Actions } from 'react-native-router-flux'
import Api from '../Helpers/ApiHelper'
import {
  drag,
  pinch,
  GestureView
} from 'react-native-gestures'

// Styles
import styles, { box as boxStyles, photo as photoStyles } from './Styles/BoxScreenStyle'

import { connect } from 'react-redux'
const GLOBAL = {}

class Box extends React.Component {

  toStyle = ({
               x: left,
               y: top,
               width,
               height
             }) => {
    GLOBAL.boundingBox = {
      x1: left / GLOBAL.propW,
      y1: top / GLOBAL.propH,
      x2: (left + width) / GLOBAL.propW,
      y2: (top + height) / GLOBAL.propH
    }
    return {
      ...boxStyles,
      top,
      left,
      width,
      height
    }
  }

  onNext = () => {
    let imageUrl = Api.getImageURL({...GLOBAL.boundingBox, url: this.props.photo_url})
    Actions.drawScreen({imageUrl})
  }

  render () {
    let {
      photo_url: uri,
      width,
      height,
      box: {
        top_left_y: y,
        top_left_x: x,
        bottom_right_x: bottomRightX,
        bottom_right_y: bottomRightY
      }
    } = this.props

    let realH = Metrics.screenWidth * (height / width)
    let realW = Metrics.screenWidth

    let propH = realH / height
    let propW = realW / width

    GLOBAL.propH = propH
    GLOBAL.propW = propW

    x = propW * x
    y = propH * y
    bottomRightX = propW * bottomRightX
    bottomRightY = propH * bottomRightY

    let boxWidth = bottomRightX - x
    let boxHeight = bottomRightY - y

    if (!GLOBAL.boundingBox) {
      GLOBAL.boundingBox = {
        x1: x / propW,
        y1: y / propH,
        x2: bottomRightX / propW,
        y2: bottomRightY / propH
      }
    }

    return (
      <View style={styles.container}>
        <Image
          style={{
            ...photoStyles,
            height: realH
          }}
          source={{uri}}
        />
        <GestureView.default
          style={{
            ...boxStyles,
            top: y,
            left: x,
            width: boxWidth,
            height: boxHeight
          }}
          gestures={[pinch, drag]}
          toStyle={this.toStyle}
          type='View'
          onError={console.error}
        >
          <Text />
          <Text />
        </GestureView.default>
        <TouchableOpacity
          focusedOpacity={0.7}
          activeOpacity={0.7}
          onPress={() => this.onNext()}
          style={styles.buttonContainer}
        >
          <Text
            style={styles.buttonText}
          >{I18n.t('next')}</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Box)
