import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'native-base';
import { TextInput } from 'react-native';
// import FlatListProductCategory from 'components/FlatListProductCategory';
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

  const limit = 6;
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState(() => []);
  const { products, isReachingEnd, error } = useGetProducts(page, limit);

  const { carts } = useGetCarts();

  useEffect(() => {
    if (products) {
      setProduct(product.concat(products[0].data.results));
    }
  }, [products]);

  const onScroll = () => {
    if (parseFloat(yOffset) > 50) {
      setScrollEnable(true);
    } else if (parseFloat(yOffset) === 0) {
      setScrollEnable(false);
    }
  };

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
          onScroll();
        }}
        onEndReachedThreshold={0.01}
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <SlideShowImage />

                {/* <FlatListProductCategory data={product} /> */}
                <FlatListProductFlashSale data={product} error={error} />
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
          onPressSearch={() => navigation.navigate('SearchProduct')}
          quantityItems={carts?.data.length}
        />
      </View>
    </View>
  );
};
