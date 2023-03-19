import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList } from 'native-base';
import ItemProductFlashSale from 'components/ItemProductFlashSale';
import useGetProducts from 'hook/product/useGetProducts';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

const FlatListProductFlashSale = () => {
  const navigation = useNavigation<AppNavigationProp>();
  //SWR
  const { products, err_products } = useGetProducts();

  const renderItem = ({ item }: { item: IProduct }) => {
    return <ItemProductFlashSale data={item} onPress={() => navigation.navigate('Detail')} />;
  };

  return (
    <View style={{}}>
      <View style={styles.coverHeader}>
        <View style={styles.headerFlashSale}>
          <Text fontWeight={'bold'} textTransform="uppercase" fontSize={14} marginRight={14}>
            Flash sale
          </Text>
          <Text
            style={styles.textTime}
            color="primary.600"
            borderColor="primary.600"
            fontStyle="-moz-initial"
            textAlign="center"
            variant={'body1'}
          ></Text>
        </View>
        <Text fontWeight={'bold'}>See All</Text>
      </View>

      {err_products && <Text>Failed to load</Text>}
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.flashListFlashSale}
        data={products?.data.results}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => console.log('load ne')}
      />
    </View>
  );
};

export default FlatListProductFlashSale;
