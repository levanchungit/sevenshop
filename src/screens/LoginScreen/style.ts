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
  },
  textIpnut: {
    marginBottom: 12,
    width: '100%',
  },
  coverTextForgotPassword: {
    alignItems: 'flex-end',
    width: '100%',
  },
  textForgotPassword: {
    color: '#C21807',
    marginBottom: 20,
  },
  textLoginWith: {
    color: '#000',
    fontSize: 14,
  },
  coverIconLoginWith: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLoginWith: { width: 48, height: 48, marginRight: 10 },
  coverTextHaveAccount: {
    flexDirection: 'row',
    marginTop: 12,
  },
  textButtonRegister: {
    color: '#C21807',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
