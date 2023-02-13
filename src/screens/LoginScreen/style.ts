import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    pading: 12,
    width: '100%',
  },

  title: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 40,
  },

  image: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  viewFrom: {
    maxHeight: '30%',
    alignItems: 'center',
  },

  viewUser: {
    marginTop: 20,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  inputuser: {
    fontSize: 16,
  },

  viewPass: {
    marginTop: 20,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },

  // inputuser:{

  // }

  txtFogot: {
    textAlign: 'right',
  },

  button: {
    marginTop: 5,
    width: '60%',
    height: '20%',
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  viewBotoom: {
    alignItems: 'center',
  },
});

export default styles;
