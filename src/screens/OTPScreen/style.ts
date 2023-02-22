import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    pading: 12,
  },

  title: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 40,
  },

  txtOTP: {
    fontSize: 13,

    width: '80%',
    marginTop: 25,
  },

  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  viewFrom: {
    height: 200,
    alignItems: 'center',
  },

  viewUser: {
    marginTop: 25,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  inputuser: {
    fontSize: 16,
    width: '80%',
  },

  button: {
    marginTop: 24,
    width: '55%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default styles;
