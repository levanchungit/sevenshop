import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  coverHeader: {
    width: windowWidth,
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 12,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  coverHeaderOnScroll: {
    width: windowWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingVertical: 12,
    paddingLeft: 24,
    paddingTop: 42,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.1,
    shadowColor: '#000000',
    shadowOpacity: 1,
    elevation: 50,
  },
  search: {
    width: windowWidth * 0.7,
    height: 40,
    marginRight: 12,
    borderRadius: 2,
    borderColor: '#000000',
    borderWidth: 0.2,
    paddingLeft: 12,
    paddingVertical: 4,
  },
});
export default styles;
