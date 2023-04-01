import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flashList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: 50,
  },
  headerForYou: {
    textTransform: 'uppercase',
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 8,
  },
  listFooter: { width: '100%', alignItems: 'center', marginTop: 12, flexDirection: 'row' },
});
export default styles;
