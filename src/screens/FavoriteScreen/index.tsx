import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

const FavoriteScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18 }}>{t('Settings.title')}</Text>
    </View>
  );
};

export default FavoriteScreen;
