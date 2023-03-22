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

  const limit = 4;
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
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <View>
          <View>
            <SlideShowImage style={{}} />

            <FlatListProductFlashSale />
          </View>
        </View>
      </ScrollView>
      <View>
        <View style={scrollEnabled ? styles.coverHeaderOnScroll : styles.coverHeader}>
          {scrollEnabled ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
          <IconCart
            onPressCart={() => navigation.navigate('Cart')}
            onPressSearch={() => alert('search nè')}
            quantityItems="20"
          />
        </View>
      </View>
    </View>
  );
};
