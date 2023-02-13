import React, { useState } from 'react';
import { FlatList, Text, View, ScrollView, Image } from 'native-base';
import * as Icon from 'react-native-feather';
import Button from 'components/ButtonCategory';
import SlideShowImage from 'components/SwipeBanner';
import { DATA } from 'mocks';
import styles from './styles';

export type Item = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  selled: number;
};

export const MainScreen = () => {
  const [ItemSelected, setItemSelected] = useState([
    {
      _id: 1,
      title: 'Hoddies',
      isSelected: true,
    },
    {
      _id: 2,
      title: 'Sweeters',
      isSelected: false,
    },
    {
      _id: 3,
      title: 'Bombies',
      isSelected: false,
    },
    {
      _id: 4,
      title: 'Joggers',
      isSelected: false,
    },
  ]);
  const RenderItemCategory = ({ data }: { data: Item }) => {
    return (
      <View style={styles.item_product}>
        <Image
          style={styles.ImageItem}
          resizeMode="cover"
          source={{ uri: data.image ? data.image + '' : '123' }}
        />
        <View>
          <Text numberOfLines={1}>{data.name}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text>{data.price}đ</Text>
            <Text>Đã bán {data.selled}</Text>
          </View>
        </View>
      </View>
    );
  };

  const RenderItemFlashSale = ({ data }: { data: Item }) => {
    return (
      <View style={styles.item_product_plashsale}>
        <Image
          style={styles.ImageItemFlashSale}
          resizeMode="cover"
          source={{ uri: data.image ? data.image + '' : '123' }}
        />
        <View>
          <Text numberOfLines={1}>{data.name}</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Text>{data.price}đ</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View>
          <View style={styles.coverHeader}>
            <View>
              <Text style={styles.head_content1}>Hi Quyen</Text>
              <Text style={styles.head_content2}>Discover your style</Text>
            </View>
            <Icon.Bell stroke="black" fill="#fff" width={24} height={24} />
          </View>

          <SlideShowImage />
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
              }}
            >
              <Text style={{ textTransform: 'uppercase', fontSize: 20 }}>Flash sale</Text>
              <Text>See All</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={styles.flastListFlashSale}
              data={DATA}
              renderItem={({ item }) => <RenderItemFlashSale data={item} />}
              keyExtractor={(item1) => item1._id}
            />
          </View>

          <View style={styles.coverButtonOpac}>
            {ItemSelected.map((item) => (
              <Button
                onPress={() => {
                  const ItemSelected2 = ItemSelected.map((item2) => {
                    return { ...item2, isSelected: item.title === item2.title };
                  });
                  setItemSelected(ItemSelected2);
                }}
                title={item.title}
                isSelected={item.isSelected}
                key={item._id}
              />
            ))}
          </View>
        </View>

        <FlatList
          horizontal
          contentContainerStyle={styles.flastList}
          // numColumns={2}
          data={DATA}
          scrollEnabled={false}
          renderItem={({ item }) => <RenderItemCategory data={item} />}
          keyExtractor={(item1) => item1._id}
        />
      </View>
    </ScrollView>
  );
};
