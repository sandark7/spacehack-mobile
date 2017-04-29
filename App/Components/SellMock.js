import React from 'react'
import { View, Image } from 'react-native'
import { Images } from '../Themes'
import Layout from '../Helpers/LayoutHelper'
import styles from './Styles/SellMockStyle'

export default class SellMock extends React.Component {
  render () {
    let imageSize = this.state ? this.state.imageSize : { width: null, height: null }
    return (
      <View style={styles.container}>
        <Image
          onLayout={e => LayoutHelper(e, 1573, this)}
          source={Images.sell_mock}
          style={imageSize}
        />
      </View>
    )
  }
}
