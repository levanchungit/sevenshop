import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  itemProductCategory: {
    width: windowWidth * 0.6,
    paddingBottom: 10,
    paddingRight: 12,
    marginBottom: 20,
  },
  coverImage: {
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: 'black ',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  imageItemCategory: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
});

export default styles;
