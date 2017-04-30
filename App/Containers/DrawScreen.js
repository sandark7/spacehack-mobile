import React from 'react'
import {
  Image,
  View
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DrawScreenStyle'

class Draw extends React.Component {

  constructor () {
    super()
    this.loading = true
  }

  isLoading = () => this.loading

  render () {
    setTimeout(() => {
      this.loading = false
    }, 5000)
    let {imageUrl: uri} = this.props
    console.log(uri)
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri}}
        />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Draw)
