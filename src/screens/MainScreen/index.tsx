import { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, Text, View, Toast } from 'native-base';
import { authAPI } from 'modules/api';
// import { MainScreenNavigationProp } from 'providers/navigation/types';

type ProductData = {
  _id: string;
  name: string;
  description: string;
};

export const MainScreen = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await authAPI.getProducts();
      setDataProducts(response.data.result);
      console.log('DATA', response.data);
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const navigation = useNavigation<MainScreenNavigationProp>();

  const renderListItems = ({ item }: { item: ProductData }) => {
    return (
      <Pressable onPress={() => console.log(item)}>
        <Text style={{ fontSize: 18, paddingHorizontal: 12, paddingVertical: 12 }}>
          {item.name}
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
          }}
        />
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <FlatList data={dataProducts} renderItem={renderListItems} />
    </View>
  );
};
