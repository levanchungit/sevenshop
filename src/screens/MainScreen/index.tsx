import React from 'react';
import { View, ScrollView } from 'native-base';
import * as Icon from 'react-native-feather';
import FlatListProductCategory from 'components/FlatListProductCategory';
import FlatListProductFlashSale from 'components/FlatListProductFlashSale';
import FlatListProductForYou from 'components/FlatListProductForYou';
import IconCart from 'components/IconCart';
import SlideShowImage from 'components/SwipeBanner';
import styles from './styles';

export const MainScreen = () => {
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View>
          <SlideShowImage style={{}} />
          <View style={styles.coverHeader}>
            <Icon.Search
              onPress={() => alert('search nè')}
              stroke="black"
              width={24}
              height={24}
              style={{ marginRight: 12 }}
            />
            <IconCart onPress={() => alert('cart nè')} quantityItems="10" />
          </View>
          <FlatListProductCategory />
        </View>

        <FlatListProductFlashSale />

        <FlatListProductForYou />
      </View>
    </ScrollView>
  );
};
