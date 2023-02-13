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
    width: '80%',
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
    marginTop: 5,
    textAlign: 'right',
    color: 'red',
  },

  button: {
    marginTop: 7,
    width: '55%',
    height: '22%',
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  viewBotoom: {
    alignItems: 'center',
  },

  viewimage: {
    marginTop: 5,
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-around',
  },
});

export default styles;
