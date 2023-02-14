import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  itemProductCategory: {
    marginHorizontal: 5,
    width: windowWidth * 0.6,
    padding: 10,
    marginBottom: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
  },
  imageItemCategory: {
    width: '100%',
    height: 300,
    marginBottom: 8,
  },
});

export default styles;
