import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Toast } from 'native-base';
import { BackHandler, TextInput } from 'react-native';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import { authAPI } from 'modules';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [scrollEnabled, setScrollEnabled] = useState(false);
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

  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    if (yOffset > 50) {
      setScrollEnabled(true);
    } else if (yOffset === 0) {
      setScrollEnabled(false);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled
        directionalLockEnabled={false}
        horizontal={false}
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        <View>
          <View>
            <SlideShowImage style={{}} />

            <FlatListProductFlashSale />
            <FlatListProductFlashSale />
            <FlatListProductFlashSale />
            <FlatListProductFlashSale />
            <FlatListProductFlashSale />
            <FlatListProductFlashSale />
            <FlatListProductFlashSale />
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
