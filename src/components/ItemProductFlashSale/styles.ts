import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  itemProductFlastSale: {
    marginHorizontal: 5,
    width: windowWidth * 0.3,
    padding: 10,
    marginBottom: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
  },
  imageItemFlashSale: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
});

export default styles;
