import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    pading: 12,
    width: '100%',
    height: '100%',
  },

  title: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 40,
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
    marginTop: 40,
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

  viewPass: {
    marginTop: 20,
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },

  txtFogot: {
    marginTop: 5,
    textAlign: 'right',
    color: 'red',
    fontSize: 15,
  },

  button: {
    marginTop: 10,
    width: '55%',
    height: '20%',
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  viewimage: {
    marginTop: 10,
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-around',
  },
});

export default styles;
