import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, Text, FlatList } from 'react-native';
import ItemProductFlashSale from 'components/ItemProductFlashSale';
import useGetProductFlashSale from 'hook/product/useGetProductFlashSale';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

// type Props = {
//   data: IProduct[];
//   error: any;
// };

const FlatListProductFlashSale = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const { t } = useTranslation();
  // const { data, error } = props;
  const { productFlashSale, err_productFlashSale } = useGetProductFlashSale();
  // console.log('productFlashSale', productFlashSale?.data);

  const targetTime = { hour: 24, minute: 0, second: 0 };

  const getTimeRemaining = (targetTime: any) => {
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      targetTime.hour,
      targetTime.minute,
      targetTime.second
    );

    let timeDifference = targetDate.getTime() - now.getTime();

    if (timeDifference < 0) {
      targetDate.setDate(targetDate.getDate() + 1);
      timeDifference = targetDate.getTime() - now.getTime();
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const remainingTime = getTimeRemaining(targetTime);

  const [hour, setHour] = useState(remainingTime.hours);
  const [minute, setMinute] = useState(remainingTime.minutes);
  const [second, setSecond] = useState(remainingTime.seconds);

  const myRef: any = useRef();
  const decreaseSecond = () => setSecond((second) => second - 1);
  const time = () => {
    if (second === 0) {
      setMinute(minute - 1);
      setSecond(59);
    }
    if (minute < 0) {
      setHour(hour - 1);
      setMinute(59);
    }
    if (hour === 0 && second === 0) {
      setHour(23);
      setMinute(59);
      setSecond(59);
    }
  };

  const timeBar = () => {
    const secondC = second.toString().length === 1 ? '0' + second : second;
    const minuteC = minute.toString().length === 1 ? '0' + minute : minute;
    const hourC = hour.toString().length === 1 ? '0' + hour : hour;
    return `${hourC}:${minuteC}:${secondC}`;
  };
  useEffect(() => {
    myRef.current = setInterval(() => decreaseSecond(), 1000);
    time();
    return () => clearInterval(myRef.current);
  }, [second]);

  return (
    <View>
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
            {t('Home.flashSale')}
          </Text>
          <Text style={styles.textTime}>{timeBar()}</Text>
        </View>
        <Text style={{ fontWeight: 'bold' }}>{t('Home.seeAll')}</Text>
      </View>

      {err_productFlashSale && <Text>Failed to load</Text>}

      {productFlashSale && (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.flashListFlashSale}
          data={productFlashSale.data.results}
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
