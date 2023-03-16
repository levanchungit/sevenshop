import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Box } from 'native-base';
import { TextInput } from 'react-native';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import useGetProducts from 'hook/product/useGetProducts';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [scrollEnable, setScrollEnable] = useState(false);
  let yOffset = '';

  //SWR
  const { products, err_products } = useGetProducts();

  if (err_products) {
    //lỗi khi không call được api
    return <Box>Failed load products</Box>;
  }
  if (!products) {
    //xử lý skeleton ở đây
    return <Box>Loading...</Box>;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled
        directionalLockEnabled={false}
        horizontal={false}
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          yOffset = event.nativeEvent.contentOffset.y.toString();
          if (parseFloat(yOffset) > 50) {
            setScrollEnable(true);
          } else if (parseFloat(yOffset) === 0) {
            setScrollEnable(false);
          }
        }}
      >
        {/* <FlatList
          data={Data1}
          renderItem={null}
          contentContainerStyle={{ marginBottom: 50 }}
          onEndReached={() => {
            console.log(isLoader);
            setIsLoader(true);
            // setTimeout(() => {
            //   setIsLoader(false);
            // }, 1000);
          }}
          onEndReachedThreshold={0.01}
          ListHeaderComponent={() => ( */}
        <View>
          <View>
            <SlideShowImage style={{}} />

            {/* <FlatListProductCategory data={Data1} /> */}
            <FlatListProductFlashSale data={products?.data.results} error={err_products} />
          </View>
          {/* <FlatListProductForYou
            data={cms_products.data}
            footer={
              isLoader ? (
                <View>
                  <ActivityIndicator />
                </View>
              ) : (
                <View></View>
              )
            }
          /> */}
        </View>
        {/* )} */}
        {/* // /> */}
      </ScrollView>
      <View>
        <View style={scrollEnable ? styles.coverHeaderOnScroll : styles.coverHeader}>
          {scrollEnable ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
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
