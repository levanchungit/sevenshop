import React, { useEffect, useRef, useState } from 'react';
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
  // const [num, setNum] = useState(100);
  const [hour, setHour] = useState(2);
  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(5);

  const intervalRef: any = useRef();
  const decreaseSecond = () => setSecond((second) => second - 1);
  const time = () => {
    if (second === 0) {
      setMinute(minute - 1);
      setSecond(3);
    }
    if (minute < 0) {
      setHour(hour - 1);
      setMinute(1);
    }
    if (hour < 0) {
      setHour(23);
      setMinute(59);
      setSecond(59);
    }
  };
  // let secondC = '',
  //   minuteC = '',
  //   hourC = '';
  // timeB = hour + ':' + minute + ':' + second;
  // const timeBar = () => {
  //   secondC = second.toString();
  //   minuteC = minute.toString();
  //   hourC = hour.toString();
  //   if (second.toString.length === 1) {
  //     return (secondC = '0' + second);
  //   }
  //   if (second.toString.length === 1) {
  //     return (minuteC = '0' + minute);
  //   }
  //   if (second.toString.length === 1) {
  //     return (hourC = '0' + hour);
  //   }
  //   return hourC + ':1111111111' + minuteC + ':111111' + secondC;
  // };
  useEffect(() => {
    time();
    // alert(timeBar());
    intervalRef.current = setInterval(decreaseSecond, 1000);

    return () => clearInterval(intervalRef.current);
  }, [second]);
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

  const RenderItemForYou = ({ data }: { data: Item }) => {
    return (
      <View style={styles.itemProduct}>
        <Image
          style={styles.imageItemForYou}
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
            <Text color="primary.600">{data.price}đ</Text>
            <Text>Đã bán {data.selled}</Text>
          </View>
        </View>
      </View>
    );
  };

  const RenderItemFlashSale = ({ data }: { data: Item }) => {
    return (
      <View style={styles.itemProductFlastSale}>
        <Image
          style={styles.imageItemFlashSale}
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
            <Text color="primary.600">{data.price}đ</Text>
          </View>
        </View>
      </View>
    );
  };
  const RenderItemCategory = ({ data }: { data: Item }) => {
    return (
      <View style={styles.itemProductCategory}>
        <Image
          style={styles.imageItemCategory}
          resizeMode="cover"
          source={{ uri: data.image ? data.image + '' : '123' }}
        />
        <View>
          <Text numberOfLines={1} style={{ fontSize: 20, marginBottom: 10 }}>
            {data.name}
          </Text>
          <View>
            <Text numberOfLines={1} fontWeight="bold" color="primary.600" style={{ fontSize: 20 }}>
              {data.price}đ
            </Text>
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
          <SlideShowImage style={{}} />
          <View style={styles.coverHeader}>
            <Icon.Search stroke="black" width={24} height={24} style={{ marginRight: 12 }} />
            <Icon.ShoppingCart stroke="black" width={24} height={24} />
          </View>
          <View>
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
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={styles.flastListFlashSale}
              data={DATA}
              renderItem={({ item }) => <RenderItemCategory data={item} />}
              keyExtractor={(item1) => item1._id}
            />
          </View>

          <View style={{}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                marginBottom: 12,
              }}
            >
              <View
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
              >
                <Text style={{ textTransform: 'uppercase', fontSize: 20, marginRight: 10 }}>
                  Flash sale
                </Text>
                <Text
                  style={{ borderRadius: 5, padding: 4, borderWidth: 1, fontSize: 20, width: 100 }}
                  color="primary.600"
                  borderColor="primary.600"
                  fontStyle="-moz-initial"
                  textAlign="center"
                >
                  {hour}:{minute}:{second}
                </Text>
              </View>
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
        </View>

        <View>
          <Text style={{ textTransform: 'uppercase', fontSize: 20, marginLeft: 12 }}>FOR YOU</Text>
          <FlatList
            horizontal
            contentContainerStyle={styles.flastList}
            // numColumns={2}
            data={DATA}
            scrollEnabled={false}
            renderItem={({ item }) => <RenderItemForYou data={item} />}
            keyExtractor={(item1) => item1._id}
          />
        </View>
      </View>
    </ScrollView>
  );
};
