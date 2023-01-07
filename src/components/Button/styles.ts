import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../global';

const styles = StyleSheet.create({
  coverButton: {
    width: '100%',
  },
  button: {
    width: 200,
    backgroundColor: colors.black,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.button,
  },
});

export default styles;
