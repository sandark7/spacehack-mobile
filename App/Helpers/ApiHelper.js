import {
  ImageStore
} from 'react-native'

const API_URL = 'http://10.91.5.40:3000/frame'

export default {

  upload (file) {
    return new Promise((resolve, reject) => {
      ImageStore.getBase64ForTag(file, photo => {
        photo = photo.split('\n').join('')
        let data = {frame: {photo}}
        fetch(API_URL, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(resolve, reject)
      }, reject)
    })
  },

  get () {
    return new Promise((resolve, reject) => {
      fetch(API_URL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json(), reject)
        .then(resolve, reject)
    })
  }

}
