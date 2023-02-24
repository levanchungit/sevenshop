import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Toast } from 'native-base';
import { TextInput } from 'react-native';
import { clearAuthTokens } from 'react-native-axios-jwt';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import { SignInPayload } from 'interfaces/Auth';
import { authAPI } from 'modules/api';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [Data1, setData1] = useState([]);
  const [scrollEnable, setScrollEnable] = useState(false);
  const [formData, setData] = useState<SignInPayload>({
    email: 'quyentran.02062000@gmail.com',
    password: '123',
  });
  let yOffset = '';

  const onSubmit = async () => {
    clearAuthTokens();
    try {
      const response = await authAPI.login(formData);
      Toast.show({
        title: response.data.message,
        duration: 3000,
      });
    } catch (e: any) {
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
  };
  const getProducts = async () => {
    let result: any;
    try {
      const response = await authAPI.getProduct();
      result = response.data.result;
      Toast.show({
        title: response.data.result[0].name,
        duration: 3000,
      });
    } catch (e: any) {
      console.log(e.message);
      Toast.show({
        title: e.response?.data?.message,
        duration: 3000,
      });
    }
    setData1(result);
  };

  useEffect(() => {
    onSubmit();
    getProducts();
    setData({ email: 'quyentran.02062000@gmail.com', password: '123' });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
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
        <View>
          <SlideShowImage style={{}} />

          <FlatListProductCategory data={Data1} />

          <FlatListProductFlashSale />

          <FlatListProductForYou data={Data1} />
        </View>
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
