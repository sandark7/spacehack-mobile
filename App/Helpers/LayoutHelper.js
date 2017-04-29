export default (e, heightInput, component) => {
  if (component.state && component.state.imageSize) return
  let imageOrig = { width: 720, height: heightInput }
  const { width } = e.nativeEvent.layout
  let imageHeight = width * imageOrig.height / imageOrig.width
  component.setState({
    imageSize: {
      height: imageHeight,
      width: null,
      resizeMode: 'contain'
    }
  })
}
