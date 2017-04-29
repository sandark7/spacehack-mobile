import React from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import SellMock from '../Components/SellMock'
import SellButtonMock from '../Components/SellButtonMock'
import styles from './Styles/SaleScreenStyle'

class SaleScreen extends React.Component {
  onPress = () => {
    Actions.photoScreen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <SellButtonMock onPress={this.onPress} />
          <SellMock />
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
