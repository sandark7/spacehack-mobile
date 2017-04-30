import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import {Colors, Metrics} from '../Themes'
import I18n from 'react-native-i18n'
// screens identified by the router
import MainScreen from '../Containers/MainScreen'
import SaleScreen from '../Containers/SaleScreen'
import PhotoScreen from '../Containers/PhotoScreen'
import BoxScreen from '../Containers/BoxScreen'

import Icon from 'react-native-vector-icons/EvilIcons'
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {

  renderLeftButton = () => {
    return (
      <Icon
        style={Styles.drawerIcon}
        name='navicon'
        size={Metrics.icons.medium}
        color={Colors.snow}
      />
    )
  }

  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene
            key='drawerChildrenWrapper'
            navigationBarStyle={Styles.navBar}
            titleStyle={Styles.title}
            leftButtonIconStyle={Styles.leftButton}
            rightButtonTextStyle={Styles.rightButton}
          >
            <Scene
              initial
              hideBackImage
              key='mainScreen'
              drawerIcon={this.renderLeftButton()}
              component={MainScreen}
              title='ebay'
              titleStyle={Styles.navTitle}
            />
            <Scene
              key='saleScreen'
              drawerIcon={this.renderLeftButton()}
              component={SaleScreen}
              title={I18n.t('sells_title')}
              titleStyle={Styles.navTitleNormal}
            />
            <Scene
              hideNavBar
              key='photoScreen'
              component={PhotoScreen}
            />
            <Scene
              hideNavBar
              key='boxScreen'
              component={BoxScreen}
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
