import React from 'react'
import { TouchableHighlight, Image } from 'react-native'
import { Images } from '../Themes'
import LayoutHelper from '../Helpers/LayoutHelper'
import styles from './Styles/SellButtonMockStyle'

export default class SellButtonMock extends React.Component {
  render () {
    let imageSize = this.state ? this.state.imageSize : { width: null, height: null }
    const { onPress } = this.props

    return (
      <TouchableHighlight onPress={onPress} style={styles.container}>
        <Image
          onLayout={e => LayoutHelper(e, 428, this)}
          style={imageSize}
          source={Images.sell_button}
        />
      </TouchableHighlight>
    )
  }
}
