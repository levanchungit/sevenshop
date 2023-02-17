import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text, View } from 'native-base';
import { DetailRouteProp, MainScreenNavigationProp } from 'providers/navigation/types';

const DetailsScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const route = useRoute<DetailRouteProp>();
  const { name, birthYear } = route.params;

  return (
    <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 10 }}>
      <Text style={{ fontSize: 18, paddingBottom: 12 }}>Name: {name}</Text>
      <Text style={{ fontSize: 18 }}>Birth Year: {birthYear}</Text>
      <Button onPress={() => navigation.navigate('Profile')} style={{ marginTop: 12 }}>
        Go to Profile
      </Button>
    </View>
  );
};

export default DetailsScreen;
