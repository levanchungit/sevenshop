import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import styles from './styles';
type Props = {
  name: string;
  image: string;
  price: number;
  onPress: Function;
};

const ItemProductFlastSale = (props: Props) => {
  const { name, image, price, onPress } = props;
  return (
    <Pressable style={styles.itemProductFlastSale} onPress={() => onPress()}>
      <Image
        alt="1241"
        style={styles.imageItemFlashSale}
        resizeMode="cover"
        source={{ uri: image ? image + '' : '123' }}
      />
      <View>
        <Text numberOfLines={1}>{name}</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text color="primary.600">{price}đ</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductFlastSale;
