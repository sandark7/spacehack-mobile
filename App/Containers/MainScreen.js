import React from 'react'
import {
  ScrollView,
  View
} from 'react-native'
import { connect } from 'react-redux'
import MainContentMock from '../Components/MainContentMock'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'

class Main extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <MainContentMock />
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
