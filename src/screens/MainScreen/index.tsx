import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Toast } from 'native-base';
import { useTranslation } from 'react-i18next';
import { BackHandler, TextInput, FlatList, View } from 'react-native';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
// import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import ItemProductForYou from 'components/ItemProductForYou';
import SlideShowImage from 'components/SwipeBanner';
import useGetCarts from 'hook/product/useGetCarts';
import useGetProducts from 'hook/product/useGetProducts';
import { IProduct } from 'interfaces/Product';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [scrollEnable, setScrollEnable] = useState(false);
  const { t } = useTranslation();
  let yOffset = '';

  const limit = 6;
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState(() => []);
  const { products, isReachingEnd } = useGetProducts(page, limit);
  const { carts } = useGetCarts();

  useEffect(() => {
    if (products) {
      setProduct(product.concat(products[0].data.results));
    }
  }, [products]);

  console.log('product', products ? products[0].data : 'null');

  const onScroll = () => {
    if (parseFloat(yOffset) > 50) {
      setScrollEnable(true);
    } else if (parseFloat(yOffset) === 0) {
      setScrollEnable(false);
    }
  };

  const [lastBackPressed, setLastBackPressed] = useState(0);

  const logOut = async () => {
    try {
      const response = await authAPI.logout();
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
      navigation.navigate('Login');
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };

  const handleBackPress = () => {
    const currentTime = new Date().getTime();

    if (currentTime - lastBackPressed < 2000) {
      logOut();
      return true;
    }

    Toast.show({ title: 'Press back again to exit', duration: 2000 });
    setLastBackPressed(currentTime);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => backHandler.remove();
  }, [handleBackPress]);

  const RenderItemForYou = ({ data }: { data: IProduct }) => {
    return (
      <ItemProductForYou
        name={data.name}
        image={data.images[0]}
        price={data.price}
        selled={123}
        onPress={() => navigation.navigate('Detail', { _id: data._id })}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        contentContainerStyle={{
          paddingBottom: 50,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
        numColumns={2}
        renderItem={({ item }) => <RenderItemForYou data={item} />}
        showsVerticalScrollIndicator={false}
        onScroll={(event) => {
          yOffset = event.nativeEvent.contentOffset.y.toString();
          onScroll();
        }}
        onEndReached={() => {
          if (!isReachingEnd) {
            setPage(page + 1);
            // eslint-disable-next-line no-console
            console.log('page', page);
          } else {
            console.log('end');
          }
        }}
        onEndReachedThreshold={0.01}
        ListHeaderComponent={() => {
          return (
            <View>
              <View>
                <SlideShowImage />

                <FlatListProductCategory />
                <FlatListProductFlashSale />
              </View>

              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: 16,
                  marginLeft: 12,
                  marginBottom: 8,
                  fontWeight: 'bold',
                }}
              >
                {t('Home.forYou')}
              </Text>
            </View>
          );
        }}
        ListFooterComponent={
          <View style={styles.listFooter} key={1}>
            <ItemProductForYou
              name={''}
              image={''}
              price={0}
              selled={0}
              onPress={() => {}}
              key={2}
            />
            <ItemProductForYou
              name={''}
              image={''}
              price={0}
              selled={0}
              onPress={() => {}}
              key={3}
            />
          </View>
        }
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
