import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView } from 'native-base';
import { TextInput } from 'react-native';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

export const MainScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const [scrollEnable, setScrollEnable] = useState(false);
  let yOffset = '';
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
        <View>
          <View>
            <SlideShowImage style={{}} />

            <FlatListProductFlashSale />
          </View>
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
