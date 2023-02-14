import { StyleSheet } from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
  },
  coverHeader: {
    position: 'absolute',
    top: 30,
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
    flexDirection: 'column',
    // flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50,
  },

  flastListFlashSale: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
});
export default styles;
