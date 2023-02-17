import React from 'react';
import { View, ScrollView } from 'native-base';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import styles from './styles';

export const MainScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <SlideShowImage style={{}} />

          <FlatListProductCategory />

          <FlatListProductFlashSale />

          <FlatListProductForYou />
        </View>
      </ScrollView>
      <View>
        <View style={styles.coverHeader}>
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
