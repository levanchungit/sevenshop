import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { View, ScrollView } from 'native-base';
import { TextInput } from 'react-native';
// import { clearAuthTokens } from 'react-native-axios-jwt';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
// import { SignInPayload } from 'interfaces/Auth';
// import { authAPI } from 'modules/api';
// import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  // const navigation = useNavigation<AppNavigationProp>();
  const [scrollEnable, setScrollEnable] = useState(false);
  // const [formData, setData] = useState<SignInPayload>({
  //   email: 'quyentran.02062000@gmail.com',
  //   password: '123',
  // });
  let yOffset = '';

  // const onSubmit = async () => {
  //   clearAuthTokens();
  //   try {
  //     const response = await authAPI.login(formData);
  //     Toast.show({
  //       title: response.data.message,
  //       duration: 3000,
  //     });
  //     console.log('login successful' + response.data.access_token);
  //   } catch (e: any) {
  //     console.log(e.message);

  //     Toast.show({
  //       title: e.response?.data?.message,
  //       duration: 3000,
  //     });
  //   }
  // };
  // const getProducts = async () => {
  //   // console.log('alooooooooooooooooo----------------');
  //   try {
  //     const response = await authAPI.getProduct();
  //     console.log('alooooooooo: ++++++++++++++' + response.data.result.name);
  //     Toast.show({
  //       title: response.data.result.name,
  //       duration: 3000,
  //     });
  //   } catch (e: any) {
  //     console.log(e.message);
  //     Toast.show({
  //       title: e.response?.data?.message,
  //       duration: 3000,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   onSubmit();
  //   getProducts();
  // }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
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

          <FlatListProductCategory />

          <FlatListProductFlashSale />

          <FlatListProductForYou />
        </View>
      </ScrollView>
      <View>
        <View style={scrollEnable ? styles.coverHeaderOnScroll : styles.coverHeader}>
          {scrollEnable ? <TextInput style={styles.search} placeholder="Search" /> : <View></View>}
          <IconCart
            onPressCart={() => alert('cart nè')}
            onPressSearch={() => alert('search nè')}
            quantityItems="20"
          />
        </View>
      </View>
    </View>
  );
};
