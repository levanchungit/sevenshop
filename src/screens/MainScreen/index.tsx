import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'native-base';
import { ActivityIndicator, TextInput } from 'react-native';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import useGetCarts from 'hook/product/useGetCarts';
import useGetProducts from 'hook/product/useGetProducts';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [scrollEnable, setScrollEnable] = useState(false);
  let yOffset = '';

  const [limit, setLimit] = useState(2);
  const [product, setProduct] = useState(() => []);
  const { products, err_products } = useGetProducts(limit);
  const { carts } = useGetCarts();

  useEffect(() => {
    if (products?.data) {
      setProduct(products.data.results);
      // setProduct((prevProduct) => {
      //   if (prevProduct) {
      //     const set = new Set([...prevProduct, ...products.data.results]);
      //     return Array.from(set);
      //   } else {
      //     return products.data.results;
      //   }
      // });
    }
  }, [products]);

  return (
    <View style={styles.container}>
      <FlatList
        data={null}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 50 }}
        onEndReached={() => {
          setLimit(limit + 2);
        }}
        onScroll={(event) => {
          yOffset = event.nativeEvent.contentOffset.y.toString();
          if (parseFloat(yOffset) > 50) {
            setScrollEnable(true);
          } else if (parseFloat(yOffset) === 0) {
            setScrollEnable(false);
          }
        }}
        onEndReachedThreshold={0.01}
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <SlideShowImage style={{}} />

                <FlatListProductCategory data={product} />
                <FlatListProductFlashSale data={product} error={err_products} />
              </View>
              <FlatListProductForYou
                data={product}
                footer={
                  <View w={'100%'} alignItems="center" mt={12}>
                    <ActivityIndicator size={30} />
                  </View>
                }
                onEndReadChy={() => {}}
              />
            </View>
          );
        }}
      />
      <View>
        <View style={scrollEnable ? styles.coverHeaderOnScroll : styles.coverHeader}>
          {scrollEnable ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
          <IconCart
            onPressCart={() => navigation.navigate('Cart')}
            onPressSearch={() => alert('search nè')}
            quantityItems={carts?.data.length}
          />
        </View>
      </View>
    </View>
  );
};
