import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import ItemProductFlashSale from 'components/ItemProductFlashSale';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

type Props = {
  data: IProduct[];
  error: any;
};

const FlatListProductFlashSale = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { data, error } = props;
  const [hour, setHour] = useState(2);
  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(5);

  const myRef: any = useRef();
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
    if (hour === 0 && second === 0) {
      setHour(23);
      setMinute(59);
      setSecond(59);
    }
  };

  const timeBar = () => {
    let secondC = '',
      minuteC = '',
      hourC = '';
    if (second.toString().length === 1) {
      secondC = '0' + second;
    } else {
      secondC = '' + second;
    }
    if (minute.toString().length === 1) {
      minuteC = '0' + minute;
    } else {
      minuteC = minute + '';
    }
    if (hour.toString().length === 1) {
      hourC = '0' + hour;
    } else {
      hourC = '' + hour;
    }
    return hourC + ':' + minuteC + ':' + secondC;
  };
  useEffect(() => {
    time();
    timeBar();
    myRef.current = setInterval(decreaseSecond, 1000);
    return () => clearInterval(myRef.current);
  }, [second]);

  return (
    <View style={{}}>
      <View style={styles.coverHeader}>
        <View style={styles.headerFlashSale}>
          <Text
            style={{
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 14,
              marginRight: 14,
            }}
          >
            Flash sale
          </Text>
          <Text style={styles.textTime}>{timeBar()}</Text>
        </View>
        <Text style={{ fontWeight: 'bold' }}>See All</Text>
      </View>

      {error && <Text>Failed to load</Text>}

      {data && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.flashListFlashSale}
          data={data}
          renderItem={({ item }: { item: IProduct }) => (
            <ItemProductFlashSale
              data={item}
              onPress={() =>
                navigation.navigate('Detail', {
                  _id: item._id,
                })
              }
            />
          )}
          keyExtractor={(item, index) => index + ''}
          onEndReached={() => console.log('load ne')}
        />
      )}
    </View>
  );
};

export default FlatListProductFlashSale;
