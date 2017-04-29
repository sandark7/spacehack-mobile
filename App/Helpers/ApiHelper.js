import RNFetchBlob from 'react-native-fetch-blob'

const POST_URL = 'http://10.91.4.17:3000/frame'

export default {
  upload (file) {
    return RNFetchBlob.fetch(
      'POST',
      POST_URL,
      {
        'Content-Type': 'application/octet-stream'
      },
      RNFetchBlob.wrap(file)
    )
      .then(res => res.text)
      .catch(console.error)
  }
}
