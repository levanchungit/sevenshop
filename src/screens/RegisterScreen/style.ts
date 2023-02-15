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

  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  viewFrom: {
    height: 150,
    alignItems: 'center',
  },

  viewUser: {
    marginTop: 30,
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
    height: '26%',
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
    marginTop: 10,
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-around',
  },
});

export default styles;
