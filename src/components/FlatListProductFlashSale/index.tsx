import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text, FlatList } from 'native-base';
import ItemProductFlastSale from 'components/ItemProductFlashSale';
import styles from './styles';
import { DATA, Item } from '../../mocks';

type Props = object;

const FlatListProductFlashSale = (props: Props) => {
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
  const RenderItemFlashSale = ({ data }: { data: Item }) => {
    return (
      <ItemProductFlastSale
        onPress={() => alert('item nè')}
        name={data.name}
        image={data.image}
        price={data.price}
      />
    );
  };
  return (
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
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text
            fontWeight={'bold'}
            style={{ textTransform: 'uppercase', fontSize: 20, marginRight: 10 }}
          >
            Flash sale
          </Text>
          <Text
            style={{ borderRadius: 5, padding: 4, borderWidth: 1, fontSize: 20, width: 100 }}
            color="primary.600"
            borderColor="primary.600"
            fontStyle="-moz-initial"
            textAlign="center"
          >
            {timeBar()}
          </Text>
        </View>
        <Text fontWeight={'bold'}>See All</Text>
      </View>

      <ScrollView>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.flastListFlashSale}
          data={DATA}
          renderItem={({ item }) => <RenderItemFlashSale data={item} />}
          keyExtractor={(item1) => item1.id}
        />
      </ScrollView>
    </View>
  );
};

export default FlatListProductFlashSale;
