import {
  ImageStore
} from 'react-native'

const API_URL = 'http://10.91.5.40:3000/frame'
const API_COORD_URL = 'http://10.91.5.40:5000'
const API_PHOTO_URL = 'http://10.91.5.40:8082'

export default {

  upload (file) {
    return new Promise((resolve, reject) => {
      ImageStore.getBase64ForTag(file, photo => {
        photo = photo.split('\n').join('')
        let data = {photo}
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
        .then(data => {
          data.photo_url = `${API_PHOTO_URL}${data.photo_url}`
          return data
        }, reject)
        .then(resolve, reject)
    })
  },

  getImageURL ({x1, x2, y1, y2, url}) {
    x1 = x1.toFixed(0)
    x2 = x2.toFixed(0)
    y1 = y1.toFixed(0)
    y2 = y2.toFixed(0)
    return `${API_COORD_URL}/${x1}/${y1}/${x2}/${y2}?image_url=${url}`
  }

}
