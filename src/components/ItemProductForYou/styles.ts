import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  itemProductForYou: {
    width: windowWidth * 0.47,
    height: windowWidth * 0.47,
    padding: 6,
    marginBottom: 12,
  },
  imageItemForYou: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  coverTextSeller: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
