import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import {Actions} from 'react-native-router-flux'
import { Images } from '../Themes'
import DrawerListItem from '../Components/DrawerListItem'

class DrawerContent extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  onPress = (screen) => {
    Actions[screen]()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.sidebar_top_mock} style={styles.logo} />
        <DrawerListItem onPress={() => this.onPress('mainScreen')} icon='home' title='main_page' />
        <DrawerListItem icon='notifications' title='notifications' />
        <DrawerListItem icon='email' title='messages' />
        <DrawerListItem icon='visibility' title='tracking' />
        <DrawerListItem icon='purchase' title='purchases' />
        <DrawerListItem icon='bid' title='bids_n_offers' />
        <DrawerListItem onPress={() => this.onPress('saleScreen')} icon='sale' title='sells' />
        <DrawerListItem icon='subscription' title='subscriptions' />
        <DrawerListItem icon='category' title='categories' />
        <DrawerListItem icon='settings' title='settings' />
        <DrawerListItem icon='help' title='help' />
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
