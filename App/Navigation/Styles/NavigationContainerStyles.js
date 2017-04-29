import {Colors} from '../../Themes/'

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.ebay_blue,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 2,
    shadowOpacity: 0.5
  },
  navTitle: {
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 25,
    marginTop: -5
  },
  navTitleNormal: {
    textAlign: 'left'
  },
  drawerIcon: {
    marginTop: 5.5
  },
  title: {
    color: Colors.snow
  },
  leftButton: {
    tintColor: Colors.snow
  },
  rightButton: {
    color: Colors.snow
  }
}
