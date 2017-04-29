import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DividerStyle'

export default class Divider extends React.Component {
  render() {
    const { text } = this.props
    return (
      <View style={styles.container}>
        { this.props.text && <Text style={styles.text}>{ text }</Text> }
      </View>
    )
  }
}
