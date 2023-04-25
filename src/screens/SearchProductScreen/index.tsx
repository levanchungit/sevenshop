import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, Pressable, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import SSInputSearch from 'components/SSInputSearch';
import useGetKeyword from 'hook/product/useGetKeyword';
import { IKey } from 'interfaces/Search';
import searchAPI from 'modules/searchAPI';
import { AppNavigationProp } from 'providers/navigation/types';

const SearchProductScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [keyword, setKeyword] = useState('');
  const { search } = useGetKeyword();

  const addSearch = async () => {
    try {
      const response = await searchAPI.addSearch({ keyword });
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('Product', { keyword });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  const renderItem1 = ({ item }: { item: IKey }) => {
    return (
      <View w={'100%'} px={0.5}>
        <Pressable
          p={2}
          justifyContent={'center'}
          borderRadius={10}
          mt={2}
          onPress={() => navigation.navigate('Product', { keyword: item.keyword })}
        >
          <Text>{item.keyword}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View flex={1} py={5} px={3}>
      <SSInputSearch
        placeholder={'Search'}
        value={keyword}
        changeValue={setKeyword}
        inputRightElement={
          <Pressable onPress={addSearch}>
            <Icon.Search stroke="white" width={24} height={24} />
          </Pressable>
        }
      ></SSInputSearch>

      <FlatList
        w={'100%'}
        h={'10%'}
        keyExtractor={(item) => item._id}
        data={search?.data.results}
        renderItem={renderItem1}
      />

      <View flexDirection={'row'} justifyContent={'space-between'} mt={2}>
        <Pressable flexDirection={'row'} justifyContent={'center'}>
          <Text>ClearAll</Text>
          <Icon.Trash2 stroke="black" width={24} height={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchProductScreen;
