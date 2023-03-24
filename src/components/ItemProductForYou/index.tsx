import React from 'react';
import { Text, View, Image, Pressable, Skeleton } from 'native-base';
import { formatCurrency } from 'react-native-format-currency';
import styles from './styles';

type Props = {
  name: string;
  image: string;
  price: number;
  selled: number;
  onPress: Function;
};

const ItemProductForYou = (props: Props) => {
  const { name, image, price, selled, onPress } = props;
  return (
    <Pressable style={styles.itemProductForYou} onPress={() => onPress()}>
      <Skeleton h={150} isLoaded={!!image} mb={2}>
        <Image
          alt="gsgsdg"
          style={styles.imageItemForYou}
          resizeMode="cover"
          source={{ uri: image ? image : '123' }}
        />
      </Skeleton>
      <View>
        <Skeleton isLoaded={!!name} mb={2}>
          <Text numberOfLines={1} fontSize={16}>
            {name}
          </Text>
        </Skeleton>
        <View style={styles.coverTextSeller}>
          <Skeleton isLoaded={!!price}>
            <Text color="primary.600" variant={'subtitle1'}>
              {formatCurrency({ amount: price ? price : 123, code: 'VND' }).slice(0, 1)}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={!!selled}>
            <Text fontSize={12}>Đã bán {selled}</Text>
          </Skeleton>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductForYou;
