import React from 'react';
import { Text, View, FlatList, Pressable } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import SSInputSearch from 'components/SSInputSearch';
import useGetKeyword from 'hook/product/useGetKeyword';
import { IKey } from 'interfaces/Search';

// const data = [
//   {
//     id: '1',
//     title: 'Keyword',
//   },
//   {
//     id: '2',
//     title: 'Keyword',
//   },
//   {
//     id: '3',
//     title: 'Keyword',
//   },
//   {
//     id: '4',
//     title: 'Keyword',
//   },
//   {
//     id: '5',
//     title: 'Keyword',
//   },
//   {
//     id: '6',
//     title: 'Keyword',
//   },
//   {
//     id: '7',
//     title: 'Keyword',
//   },
//   {
//     id: '8',
//     title: 'Keyword',
//   },
// ];

const renderItem1 = ({ item }: { item: IKey }) => {
  return (
    <View w={'100%'} px={0.5}>
      <Pressable
        p={2}
        justifyContent={'center'}
        borderRadius={10}
        mt={2}
        backgroundColor={'#D1D1D6'}
      >
        <Text>{item.keyword}</Text>
      </Pressable>
    </View>
  );
};

const SearchProductScreen = () => {
  const { search } = useGetKeyword();
  const { t } = useTranslation();
  // const addKeywordsearch = async (
  //   product_id: string,
  // ) => {
  //   try {
  //     await cartAPI.ChangeQuantity(product_id, quantity, size_id, color_id);
  //     mutate_carts();
  //   } catch (error: any) {
  //     console.error(error.message);
  //   }
  // };
  return (
    <View flex={1} py={5} px={3}>
      <SSInputSearch placeholder={'Search'}></SSInputSearch>

      <View mt={1} backgroundColor={'amber.100'}>
        <FlatList
          w={'100%'}
          keyExtractor={(item) => item._id}
          data={search?.data.results}
          renderItem={renderItem1}
        />
      </View>

      <View flexDirection={'row'} justifyContent={'space-between'} mt={2}>
        {/* <Text>History</Text> */}
        <Pressable flexDirection={'row'} justifyContent={'center'}>
          <Text>{t('SearchProduct.clearAll')}</Text>
          <Icon.Trash2 stroke="black" width={24} height={24} />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchProductScreen;
