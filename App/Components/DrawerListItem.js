import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/DrawerListItemStyle'
import { Metrics } from '../Themes'
import I18n from 'react-native-i18n'

export default class DrawerListItem extends React.Component {

  render () {
    const {title, icon, onPress} = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <View style={styles.container}>
          <Icon style={styles.icon} name={icon} size={Metrics.icons.small} />
          <Text style={styles.text}>{I18n.t(title)}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
