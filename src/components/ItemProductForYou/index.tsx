import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
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
      <Image
        alt="gsgsdg"
        style={styles.imageItemForYou}
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
          <Text>Đã bán {selled}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductForYou;
