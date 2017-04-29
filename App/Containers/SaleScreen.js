import React from 'react'
import { ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import { connect } from 'react-redux'
import {Actions} from 'react-native-router-flux'
import I18n from 'react-native-i18n'
import SellMock from '../Components/SellMock'

import styles from './Styles/SaleScreenStyle'

class SaleScreen extends React.Component {

  onPress = () => {
    Actions.photoScreen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <SellMock />
          <Button
            style={styles.button}
            onPress={this.onPress}
            title={I18n.t('start_selling')}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleScreen)
