import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerLogo: {
    backgroundColor: '#C21807',
    height: '28%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  coverForm: {
    marginHorizontal: 30,
  },
  textLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  coverTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  textIpnut: {
    marginBottom: 30,
    width: '100%',
  },

  coverIconLoginWith: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  iconLoginWith: { width: 48, height: 48, marginRight: 10 },
  coverTextHaveAccount: {
    flexDirection: 'row',
  },
  textButtonRegister: {
    color: '#C21807',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
