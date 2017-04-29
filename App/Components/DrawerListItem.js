import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/DrawerListItemStyle'
import {Metrics} from '../Themes'
import I18n from 'react-native-i18n'

const { NativeModules } = require('react-native')
const { RNI18n } = NativeModules

console.log(RNI18n)

export default class DrawerListItem extends React.Component {

  render () {
    const {title, icon} = this.props
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name={icon} size={Metrics.icons.small} />
        <Text style={styles.text}>{I18n.t(title)}</Text>
      </View>
    )
  }
}
