import React, { useState } from 'react';
import { View, ScrollView } from 'native-base';
import { TextInput } from 'react-native';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import styles from './styles';

export const MainScreen = () => {
  let yOffset = '';
  const [scrollEnable, setScrollEnable] = useState(false);

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
