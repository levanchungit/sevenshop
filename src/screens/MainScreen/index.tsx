import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'native-base';
import { TextInput } from 'react-native';
// import FlatListProductCategory from 'components/FlatListProductCategory';
// import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
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

  const limit = 6;
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState(() => []);
  const { products, isReachingEnd } = useGetProducts(page, limit);
  const { carts } = useGetCarts();

  useEffect(() => {
    if (products) {
      setProduct(product.concat(products[0].data.results));
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
          if (!isReachingEnd) {
            setPage(page + 1);
          }
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
                {/* 
                <FlatListProductCategory data={product} />
                <FlatListProductFlashSale data={product} error={err_products} /> */}
              </View>
              <FlatListProductForYou data={product} />
            </View>
          );
        }}
      />
      <View style={scrollEnable ? styles.coverHeaderOnScroll : styles.coverHeader}>
        {scrollEnable ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
        <IconCart
          onPressCart={() => navigation.navigate('Cart')}
          onPressSearch={() => alert('search nè')}
          quantityItems={carts?.data.length}
        />
      </View>
    </View>
  );
};
