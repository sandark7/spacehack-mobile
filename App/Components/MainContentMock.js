import React from 'react'
import { View, Image } from 'react-native'
import {Images} from '../Themes'
import Layout from '../Helpers/LayoutHelper'
import styles from './Styles/MainContentMockStyle'

export default class MainContentMock extends React.Component {
  render () {
    let imageSize = this.state ? this.state.imageSize : {width: null, height: null}
    return (
      <View style={styles.container}>
        <Image
          onLayout={e => Layout(e, 3588, this)}
          source={Images.main_middle_mock}
          style={imageSize}
        />
      </View>
    )
  }
}
