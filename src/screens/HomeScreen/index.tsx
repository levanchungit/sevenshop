import React, { useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import Button from '../../components/ButtonCategory';
import SlideShowImage from '../../components/SwipeBanner';
import styles from './style';

type Props = object;
export interface item {
  _id: string;
  name: string;
  price: Float;
  image: string;
  category: string;
  selled: Float;
}
const DATA = [
  {
    _id: '1',
    name: 'Michael Scottshhhhhhhhhsdddddddddddđ',
    price: 100,
    image: 'https://cf.shopee.vn/file/01de43664f52231011f570463e9393be',
    category: '123',
    selled: 200,
  },
  {
    _id: '2',
    name: 'Michael Scott',
    price: 100,
    image: 'https://cf.shopee.vn/file/90779d1d1ed2d86bf3b6be39c9908ec7',
    category: '123',
    selled: 200,
  },
  {
    _id: '3',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://mochanstore.com/wp-content/uploads/2022/11/mochanstore.com-AO-NI-SWEETER-KY-HOA-KHUNG-LONG-KIM.jpg',
    category: '123',
    selled: 200,
  },
  {
    _id: '4',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://salt.tikicdn.com/cache/w1200/ts/product/d0/2f/c0/186c8e184b92ccd59a6b44fc68f86cf5.jpg',
    category: '123',
    selled: 200,
  },
  {
    _id: '5',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://static.wixstatic.com/media/b6f0c5_71dbc45986954ee58dcd3151d7d714cd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    category: '123',
    selled: 200,
  },
  {
    _id: '6',
    name: 'Michael Scott',
    price: 100,
    image:
      'https://static.wixstatic.com/media/b6f0c5_71dbc45986954ee58dcd3151d7d714cd~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    category: '123',
    selled: 200,
  },
];
const HomePage = (props: Props) => {
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
  const RenderItemCategory = ({ data }: { data: item }) => {
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

  const RenderItemFlashSale = ({ data }: { data: item }) => {
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
                  // alert('haha')
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

export default HomePage;
