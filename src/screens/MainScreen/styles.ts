import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
  },
  coverHeader: {
    position: 'absolute',
    top: 20,
    right: 12,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  head_content1: {
    fontSize: 14,
  },
  head_content2: {
    fontSize: 30,
  },
  flastList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50,
  },

  flastListFlashSale: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemProduct: {
    marginHorizontal: 5,
    width: windowWidth * 0.47,
    padding: 10,
    marginBottom: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
  },

  itemProductCategory: {
    marginHorizontal: 5,
    width: windowWidth * 0.6,
    padding: 10,
    marginBottom: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
  },
  itemProductFlastSale: {
    marginHorizontal: 5,
    width: windowWidth * 0.3,
    padding: 10,
    marginBottom: 20,
    borderColor: '#cccccc',
    borderWidth: 0.5,
  },

  ButtonTabOpacity: {
    width: 80,
    height: 40,
    borderRadius: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGroundButton: {
    backgroundColor: '#FD5535',
  },
  textColorSelected: {
    color: 'white',
  },
  coverButtonOpac: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 12,
  },

  imageItemCategory: {
    width: '100%',
    height: 300,
    marginBottom: 8,
  },
  imageItemForYou: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },

  imageItemFlashSale: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
});
export default styles;
